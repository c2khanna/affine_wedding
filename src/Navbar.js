import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import SmoothCollapse from 'react-smooth-collapse';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpen: false
    }
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick() {
  	this.setState({
      isNavBarOpen: !(this.state.isNavBarOpen)
  	});
  }
  render() {
    return (
      <div className="bg-black navBar tc ttu">
        <div className="navBarMenu pt4 pb4">
          <ul className="navBarMenuList">
            <li>
              <NavLink exact to="/" className="white" activeClassName="activeLink">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className="white" activeClassName="activeLink">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" className="white" activeClassName="activeLink">Services</NavLink>
            </li>
            <li>
              <NavLink to="/destinations" className="white" activeClassName="activeLink">Destinations</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className="white" activeClassName="activeLink">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navBarMenuMobile outer">
          <i className="fa fa-bars fa-2x white" onClick={this.handleClick}></i>
          <div className="inner">
            <ul className={!this.state.isNavBarOpen ? 'hidden bg-black' : 'navBarMenuMobileList bg-black'}>
              <li>
                <NavLink exact to="/" className="white" activeClassName="activeLink">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" className="white" activeClassName="activeLink">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="white" activeClassName="activeLink">Services</NavLink>
              </li>
              <li>
                <NavLink to="/destinations" className="white" activeClassName="activeLink">Destinations</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs" className="white" activeClassName="activeLink">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
