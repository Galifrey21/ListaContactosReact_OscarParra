import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
<div className="container mt-5">
<div className="row justify-content-end">
<div className="col-2">
<Link to="/addcontact">
<span className="btn btn-primary" role="button">AÑADIR</span>
</Link>
</div>
</div>
</div>

);
export const Home2 = () =>(
<div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." classNameclass="img-fluid rounded-start" alt="..."/>
    </div>
    <div classNameclass="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
)