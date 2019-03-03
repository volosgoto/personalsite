import React from 'react';
import Mailto from "react-protected-mailto";

export default function ContactCard() {
  return (
    <div className="style-box-1">
      <h3>ANDRII VOLOSOVYCH</h3>

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
          <i className="fab fa-skype"></i> volosovich82
          </a>
        <p>Address: Kyiv, Ukraine</p>
        <p>Phone: +38 (063) 871-51-51</p>
      </div>
    </div>
  )
}
