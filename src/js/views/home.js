import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import imagen from "../../img/rigoBaby.jpg"
import "../../styles/home.css";

const API_URL = "https://playground.4geeks.com/contact/";
const AGENDA_NAME = "test";

export const Home = () => {
	const navigate = useNavigate();

	const [agenda, setAgenda] = useState({});

	useEffect(() => {
		//Recuperamos agenda
		fetch(API_URL + "agendas/" + AGENDA_NAME, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((resp) => {
				//Si agenda no existe, la creamos
				if (resp.statusText === "Not Found") {
					createAgenda();
				} else {
					return resp.json();
				}
			})
			.then((data) => {
				//Guardar informacion agenda
				setAgenda(data);
			})
			.catch((error) => console.error("Error al cargar agendas:", error));
	}, []);

	const createAgenda = () => {
		fetch(API_URL + "agendas/" + AGENDA_NAME, {
			method: "POST",
			body: "",
			headers: { "Content-Type": "application/json" },
		})
			.then((resp_create) => resp_create.json())
			.then((data_create) => {
				//Guardar informacion agenda
				setAgenda(data_create);
			})
			.catch((error) => console.error("Error al crear agenda:", error));
	}

	const deleteContact = (id_contact) => {
		if (confirm('Seguro que quieres elimar?')) {
			fetch(API_URL + "agendas/" + AGENDA_NAME + "/contacts/" + id_contact, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			})
				.then((resp) => {
					const _agenda = { ...agenda };
					const index_contact = _agenda.contacts.findIndex(x => x.id === id_contact);
					if (index_contact != -1) {
						_agenda.contacts.splice(index_contact, 1);
						setAgenda(_agenda);
					}
				})
				.catch((error) => console.error("Error al crear agenda:", error));
		}
	}

	const updateContact = (contact) => {
		navigate('/addcontact', { state: { contact: contact } });
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-end">
				<div className="col-2">
					<Link to="/addcontact">
						<span className="btn btn-primary" role="button">Añadir</span>
					</Link>
				</div>
			</div>
			<div className="container d-flex flex-column align-items-center">
				{agenda.contacts && agenda.contacts.map((contact, index) => (
					<div key={index} className="card mb-3" style={{ width: "100%", maxWidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src={imagen} className="img-fluid rounded-start" alt="..." style={{ height: "100%", width: "100%", objectFit: "cover" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									{/* Botones arriba a la derecha */}
									<div className="d-flex justify-content-end mb-3">
										<button type="button" className="btn btn-primary me-1" onClick={() => updateContact(contact)}>Editar</button>
										<button type="button" className="btn btn-danger ms-1" onClick={() => deleteContact(contact.id)}>Eliminar</button>
									</div>
									{/* Contenido principal */}
									<h5 className="card-title">{contact.name}</h5>
									<p className="card-text"><strong className="me-2">Dirección:</strong>{contact.address}</p>
									<p className="card-text"><strong className="me-2">Teléfono:</strong>{contact.phone}</p>
									<p className="card-text"><strong className="me-2">Email:</strong>{contact.email}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>

	);
};
