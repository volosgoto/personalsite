import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <div className="w3-row">
        <div className="w3-bar w3-black w3-center">
          <Link to="/" className="w3-bar-item w3-button w3-center">
            <i className="fa fa-home" />
          </Link>
          <Link
            to="/resume"
            className="w3-bar-item w3-button w3-hide-small w3-center"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="w3-bar-item w3-button w3-hide-small w3-center"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="w3-bar-item w3-button w3-hide-small w3-center"
          >
            About
          </Link>
          <button className="w3-bar-item w3-button w3-teal w3-right w3-hide-large w3-hide-medium"
            onClick={navbarCollapse}><i className="fa fa-bars" /></button>
          {/* <a
            // href="javascript:void(0)"
            href="#"
            className="w3-bar-item w3-button w3-teal w3-right w3-hide-large w3-hide-medium"
            onClick={navbarCollapse}
          > */}
          {/* <i className="fa fa-bars" />
          </a> */}
          <a
            className="icon w3-bar-item w3-button w3-right"
            href="https://join.skype.com/invite/bXprd7VcNmnf"
            title="Skype Profile"
            target="_blank"
          >
            <i className="fab fa-skype fa-lg" />
          </a>
          <a
            className="icon w3-bar-item w3-button w3-right"
            href="https://www.facebook.com/profile.php?id=100005021372901"
            title="Follow with Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook icon-blue fa-lg" />
          </a>
          <a
            className="icon w3-bar-item w3-button w3-right"
            href="https://plus.google.com/106019659905526550845"
            title="Follow with Google"
            target="_blank"
          >
            <i className="fab fa-google-plus-square fa-lg" />
          </a>
          <a
            className="icon w3-bar-item w3-button w3-right"
            href="https://github.com/volosgoto"
            title="Follow with GitHub"
            target="_blank"
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </div>
        <div
          id="navbar"
          className="w3-center w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium"
        >
          <Link
            onClick={hideElem}
            to="/"
            className="w3-bar-item w3-button w3-center"
          >
            Home
          </Link>
          <Link
            onClick={hideElem}
            to="/resume"
            className="w3-bar-item w3-button w3-center"
          >
            Resume
          </Link>
          <Link
            onClick={hideElem}
            to="/contact"
            className="w3-bar-item w3-button w3-center"
          >
            Contact
          </Link>
          <Link
            onClick={hideElem}
            to="/about"
            className="w3-bar-item w3-button w3-center"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

function navbarCollapse() {
  let x = document.getElementById("navbar");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function hideElem() {
  let x = document.getElementById("navbar");

  // x.animate(
  //   [
  //     // keyframes
  //     { transform: "translateY(0px)" },
  //     { transform: "translateY(-300px)" }
  //   ],
  //   {
  //     // timing options
  //     duration: 800,
  //     iterations: 1
  //   }
  // );

  x.className = x.className.replace(" w3-show", " w3-hide");
}

export default Header;
