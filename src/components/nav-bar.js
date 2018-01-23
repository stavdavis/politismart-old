import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group';
import './nav-bar.css';
let myCSSTransitionComponent = CSSTransition;

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/findLawmakers">Find your optimal lawmakers</a></li>
                  <li><a href="/contributions">Optimize your contributions - coming soon</a></li>
                  <li><a href="/stats">Stats - coming soon</a></li>
                  <li><a href="/signup">Login - coming soon</a></li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return ( 
      <div id = "menu">
        <button className="menu-button" onClick = { this.toggleMenu } value="menu">&#9776;</button>
      <myCSSTransitionComponent transitionName="menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> 
        {menu} 
      </myCSSTransitionComponent>
    </div>
    )
  }
}