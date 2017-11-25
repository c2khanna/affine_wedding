import React, { Component } from 'react';
import Navbar from './Navbar'
import logo from './imgs/Affine.png'

class Header extends Component {
  render() {
    return (
      <div className="pb4 header">
        <Navbar/>
        <div className="welcome">
          <div className="logo mb3">
            <img src={logo} alt="logo"/>
          </div>
          <div className="welcome-text tc ttu mh2">
            Welcome to Affine Weddings
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
