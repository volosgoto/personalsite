import React from 'react';
import PhpAcademy from '../images/certificates/Cert_PHP_Academy_Volosovych_Andrii.jpg'
import JavaStart from '../images/certificates/Cert_Java_Start_Volosovych_Andrii.png'
import JavaOop from '../images/certificates/Cert_Java_OOP_Volosovych_Andrii.png'

export default function About() {
  return (
    <React.Fragment>
      <div className="w3-container w3-border">
        <div className="w3-center">
          <h2>About</h2>
          <p>Hi! I am  an open-minded front-end developer with emotional inteligence that cares about how things look and work is in touch! In the same time i can implement some back-end as well).
      </p>
          <h2>Skills</h2>
        </div>
        <ul className="w3-ul w3-card w3-center w3-margin">
          <li>HTML/CSS (Sass, FlexBox, BootStrap, Responsive Design, Cross-Browser Development);</li>
          <li>JavaScript (ES6/ES5);</li>
          <li>React JS, Redux;</li>
          <li>JQuery;</li>
          <li>PHP 7 (Yii 2, MySQL);</li>
          <li>RESTfull API access level management design;</li>
          <li>Version Control/Git;</li>
          <li>Browser Developer Tools;</li>
          <li>Adobe Photoshop</li>
          <li>OS: Linux, Windows</li>
        </ul>
        <div className="w3-container w3-center">
          <h2>Certificates</h2>
          <img src={PhpAcademy} className="w3-image w3-card-4 w3-margin w3-hover-shadow" width="400px" alt="PhpAcademy" />
          <img src={JavaStart} className="w3-image w3-card-4 w3-margin w3-hover-shadow" width="400px" alt="JavaStart" />
          <img src={JavaOop} className="w3-image w3-card-4 w3-margin w3-hover-shadow" width="400px" alt="JavaOop" />
        </div>
      </div>
    </React.Fragment>
  )
}
