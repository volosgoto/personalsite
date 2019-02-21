import React from "react";
import ProfileImg from "../images/andriivolosovych.jpeg";

export default function Profile() {
  return (
    <div className="w3-col w3-quarter">
      <div className="w3-container w3-mobile w3-center">
        <h3>ANDRII VOLOSOVYCH</h3>
        <h3>User Name</h3>
        <div className="w3-card w3-hover-shadow w3-hover-opacity w3-center">
          <img src={ProfileImg} alt="ProfileImg" style={{ width: "100%" }} />
          <div className="w3-container">
            <h4>
              <b>Frond-End, JavaScript, React, PHP</b>
            </h4>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
