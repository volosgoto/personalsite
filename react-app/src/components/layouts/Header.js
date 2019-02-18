import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Header</h1>
    <nav>
      <div className="w3-row">
        <div className="w3-bar w3-black w3-center">
          <Link to="/" className="w3-bar-item w3-button w3-center"><i className="fa fa-home"></i></Link>
          <Link to="/resume" className="w3-bar-item w3-button w3-hide-small w3-center">Resume</Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-hide-small w3-center">Contact</Link>
          <Link to="/about" className="w3-bar-item w3-button w3-hide-small w3-center">About</Link>

          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-teal w3-right w3-hide-large w3-hide-medium" onClick={navbarCollapse}><i className="fa fa-bars"></i></a>
          <a className="icon w3-bar-item w3-button w3-right" href="https://join.skype.com/invite/bXprd7VcNmnf"
            title="Skype Profile" target="_blank"><i className="fab fa-skype fa-lg"></i></a>
          <a className="icon w3-bar-item w3-button w3-right" href="https://www.facebook.com/profile.php?id=100005021372901"
            title="Follow with Facebook" target="_blank"><i className="fab fa-facebook icon-blue fa-lg"></i></a>
          <a className="icon w3-bar-item w3-button w3-right" href="https://plus.google.com/106019659905526550845"
            title="Follow with Google" target="_blank"><i className="fab fa-google-plus-square fa-lg"></i></a>
          <a className="icon w3-bar-item w3-button w3-right" href="https://github.com/volosgoto" title="Follow with GitHub"
            target="_blank"><i className="fab fa-github fa-lg"></i></a>

        </div>
        <div id="navbar" className="w3-center w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium">
          <Link to="/" className="w3-bar-item w3-button w3-center">Home</Link>
          <Link to="/resume" className="w3-bar-item w3-button w3-center">Resume</Link>
          <Link to="/contact" className="w3-bar-item w3-button w3-center">Contact</Link>
          <Link to="/about" className="w3-bar-item w3-button w3-center">About</Link>
        </div>
      </div>
    </nav>

  </header >
);

function navbarCollapse() {
  var x = document.getElementById("navbar");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


export default Header;
