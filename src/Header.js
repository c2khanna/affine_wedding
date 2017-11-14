import React, { Component } from 'react';
import Navbar from './Navbar'
import logo from './imgs/Affine.png'

class Header extends Component {
  render() {
    return (
      <div className="pb4 header f4">
        <Navbar/>
        <div className="welcome">
          <div className="logo mt4 mb3">
            <img src={logo} alt="logo"/>
          </div>
          <div className="welcome-text tc ttu">
            Welcome to Affine Weddings
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
