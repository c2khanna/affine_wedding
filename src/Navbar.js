import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

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
        <div className="navBarMenu">
          <ul className="navBarMenuList">
            <li>
              <NavLink exact to="/" className="white" activeClassName="activeLink">
                <div className="navBarLink">Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className="white" activeClassName="activeLink">
                <div className="navBarLink">About Us</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="white" activeClassName="activeLink">
                <div className="navBarLink">Services</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations" className="white" activeClassName="activeLink">
                <div className="navBarLink">Destinations</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className="white" activeClassName="activeLink">
                <div className="navBarLink">Contact Us</div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navBarMenuMobile outer">
          <div className="hamburgerMenu bg-black">
            <i className="fa fa-bars fa-2x white" onClick={this.handleClick}></i>
          </div>
          <div className="inner">
            <div className={!this.state.isNavBarOpen ? 'hidden bg-black' : 'navBarMenuMobileList bg-black'}>
              <ul>
                <li>
                  <NavLink exact to="/" className="white" activeClassName="activeLink">
                    <div className="navBarLink">Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs" className="white" activeClassName="activeLink">
                    <div className="navBarLink">About Us</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="white" activeClassName="activeLink">
                    <div className="navBarLink">Services</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/destinations" className="white" activeClassName="activeLink">
                    <div className="navBarLink">Destinations</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs" className="white" activeClassName="activeLink">
                    <div className="navBarLink">Contact Us</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
