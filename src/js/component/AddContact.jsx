import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://playground.4geeks.com/contact/";
const AGENDA_NAME = "test";

const AddContact = () => {

    const [contact_name, setContactName] = useState("");
    const [contact_address, setContactAddress] = useState("");
    const [contact_email, setContactEmail] = useState("");
    const [contact_phone, setContactPhone] = useState("");

    const add = () => {
        fetch(API_URL + "agendas/"+AGENDA_NAME+"/contacts",{
            method:"POST",
            body:JSON.stringify({
                "name": contact_name,
                "phone": contact_phone,
                "email": contact_email,
                "address": contact_address
              }),
            headers: { "Content-Type": "application/json" },
          } )
            .then((resp) => resp.json())
            .then((data) => {
              console.log("Tareas obtenidas:", data);
            })
            .catch((error) => console.error("Error al cargar tareas:", error));
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Link to="/">
                        <span className="btn btn-primary" role="button">Back</span>
                    </Link>
                    <input className="w-100" name="contact_name" type="text" required placeholder="Nombre" value={contact_name} onChange={(e) => setContactName(e.target.value)}/>
                    <input className="w-100 mt-3" name="contact_address" type="text" required placeholder="Dirección" value={contact_address} onChange={(e) => setContactAddress(e.target.value)}/>
                    <input className="w-100 mt-3" name="contact_email" type="text" required placeholder="Email" value={contact_email} onChange={(e) => setContactEmail(e.target.value)}/>
                    <input className="w-100 mt-3" name="contact_phone" type="text" required placeholder="Telefono"value={contact_phone} onChange={(e) => setContactPhone(e.target.value)} />
                    <button className="btn btn-success w-100 mt-3" onClick={add}>Añadir</button>
                </div>
            </div>
        </div>
    );
}

export default AddContact;