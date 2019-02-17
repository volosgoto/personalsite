import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/resume" activeClassName="is-active">Resume</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    <NavLink to="/about" activeClassName="is-active">About</NavLink>


    <nav>
      <div class="w3-row">
        <div class="w3-bar w3-black w3-center">

          <a href="#" class="w3-bar-item w3-button w3-center"><i class="fa fa-home"></i></a>
          <a href="/app/public/resume.html" class="w3-bar-item w3-button w3-hide-small w3-center">Resume</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-center">Skills</a>
          <a href="/app/public/contacts.html" class="w3-bar-item w3-button w3-hide-small w3-center">Contacts</a>
          <a href="/app/public/other.html" class="w3-bar-item w3-button w3-hide-small w3-center">Other</a>

          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-teal w3-right w3-hide-large w3-hide-medium"
            onclick="navbarCollapse()"><i class="fa fa-bars"></i></a>
          <a class="icon w3-bar-item w3-button w3-right" href="https://join.skype.com/invite/bXprd7VcNmnf"
            title="Skype Profile" target="_blank"><i class="fab fa-skype fa-lg"></i></a>
          <a class="icon w3-bar-item w3-button w3-right" href="https://www.facebook.com/profile.php?id=100005021372901"
            title="Follow with Facebook" target="_blank"><i class="fab fa-facebook icon-blue fa-lg"></i></a>
          <a class="icon w3-bar-item w3-button w3-right" href="https://plus.google.com/106019659905526550845"
            title="Follow with Google" target="_blank"><i class="fab fa-google-plus-square fa-lg"></i></a>
          <a class="icon w3-bar-item w3-button w3-right" href="https://github.com/volosgoto" title="Follow with GitHub"
            target="_blank"><i class="fab fa-github fa-lg"></i></a>
        </div>
        <div id="navbar" class="w3-center w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium">
          <a href="/app/public/resume.html" class="w3-bar-item w3-button">Resume</a>
          <a href="#" class="w3-bar-item w3-button">Skills</a>
          <a href="/app/public/contacts.html" class="w3-bar-item w3-button">Contacts</a>
          <a href="/app/public/other.html" class="w3-bar-item w3-button">Other</a>
        </div>
      </div>
    </nav>

  </header>
);

export default Header;
