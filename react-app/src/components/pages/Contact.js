// Convert Contact to class component

import React from "react";
import GoogleMap from "./GoogleMap";
import ContactCard from './ContactCard'


let Contact = props => {
  return (
    <div className="container">
      <div className="style-container">
        <ContactCard />
      </div>
      <div className="style-box-1">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
