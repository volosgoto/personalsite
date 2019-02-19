import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../images/404_page.png";

const NotFoundPage = () => (
  <div className="container">
    <h1>404. Page not found</h1>
    <h2>
      <Link to="/">Go home</Link>
    </h2>

    <div className="container">
      <div className="w3-card w3-hover-shadow w3-hover-opacity w3-center w3-margin">
        <img src={NotFound} width="400px" />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
