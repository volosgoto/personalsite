import React from "react";
import GoogleMap from "./GoogleMap";
import ContactCard from './ContactCard';
import Spinner from '../layouts/Spinner';


let Contact = props => {

  if (<GoogleMap />) {
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
  } else {
    return <Spinner />
  }





};

export default Contact;
