//Based on: https://github.com/hjmccain/maplyful
//Don't forget to import bootstraps' basic css file into the main index.html
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './nav-bar.css';

export default class MainNavBar extends React.Component {
  render() {
    let rightNavLinks = (
      <Nav>
        <NavItem className="navbar-app-link" href="#about">About</NavItem>
        <NavItem className="navbar-app-link" href="#findLawmakers">Find lawmakers</NavItem>
        <NavItem className="navbar-app-link" href="#contribute">Optimize contributions</NavItem>
        <NavItem className="navbar-app-link" href="#stats">Stats</NavItem>
        <NavItem className="navbar-app-link" href="#signup">Login / Register</NavItem>
      </Nav>
    );
    return (
      <Navbar className="navbar-app" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a className="app-name" href="#findLawmakers">Politismart</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          {rightNavLinks}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}