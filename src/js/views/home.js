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
