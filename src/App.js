import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import WelcomeImg from './imgs/welcome_img.png';
import './Home.css';
import {NavLink} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="homePage">
          <div className="welcomeImg">
            <h1><img src={WelcomeImg} alt="wedding planner pic"/></h1>
          </div>
          <div className="homePageButtonContainer pa4">
            <NavLink to="/contactUs" className="white">
              <div className="contactUsButton ttu pv3">
              Get In Touch
            </div>
            </NavLink>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
