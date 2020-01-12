import React from "react";
import ProfileImg from "../images/andriivolosovych.jpg";

function Profile(props) {
  props = {
    name: "Andrii Volosovych",
    image: ProfileImg,
    jobs: "Frond-End, JavaScript, React, WordPress, PHP",
    vocation: "Developer"
  };
  const { name, image, jobs, vocation } = props;
  return (
    <div className="w3-col w3-quarter">
      <div className="w3-container w3-mobile w3-center">
        <h3 className="profile">{name}</h3>
        <div className="w3-card w3-hover-shadow w3-center">
          <img src={image} alt="profile_image" style={{ width: "100%" }} />
          <div className="w3-container profile">
            <h4>
              <b>{jobs}</b>
            </h4>
            <h5>{vocation}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
