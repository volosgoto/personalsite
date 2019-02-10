import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="w3-bar-item w3-button w3-center" exact={true}> 
      Home<i className="fa fa-home" />   
    </NavLink>
    <NavLink to="/resume" activeClassName="is-active">
      Resume
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
  </header>
);

export default Header;
