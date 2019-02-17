import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Personal</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/resume" activeClassName="is-active">Resume</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    <NavLink to="/about" activeClassName="is-active">About</NavLink>
  </header>
);

export default Header;
