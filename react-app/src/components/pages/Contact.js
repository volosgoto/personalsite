// Convert Contact to class component

import React from "react";
import Mailto from "react-protected-mailto";
import GoogleMap from "./GoogleMap";


let Contact = props => {
  return (
    <div className="container">
      <div className="style-container">
        <div className="style-box-1">
          <h3>ANDRII VOLOSOVYCH</h3>
        </div>
        <div className="style-box-1">
          <div id="contacts">
            Phone: +38 (063) 871-51-51
            <p>
              Email:{" "}
              <Mailto
                email="volosovich@i.ua"
                headers={
                  ({ subject: "Question from Volosovich A. personal website" },
                    { cc: "" })
                }
              />
            </p>
          </div>
          <p />
          <a href="https://join.skype.com/invite/bXprd7VcNmnf">
            Skype: volosovich82
          </a>
          <p>Address: Kyiv, Ukraine</p>
          <p>Phone: +38 (063) 871-51-51</p>
        </div>
      </div>
      <div className="style-box-1">

        <GoogleMap />

        }


      </div>
    </div>
  );
};

export default Contact;
