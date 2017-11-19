import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './contactUs.css';
import {NavLink} from 'react-router-dom';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="contactUsContainer">
          <div className="contactUsTitle f1 tc">
            Contact Us
          </div>
          <div className="contactUsContent">
            <div className="dropUsaLine">
              Drop us a line!
            </div>
            <div className="contactUsFormContainer">
              <form>
                <div><input type="text" placeholder="Name" className="mt4"></input></div>
                <div><input type="email" placeholder="Email*"></input></div>
                <div><textarea placeholder="Message" rows="5"></textarea></div>
                <div><input type="text" placeholder="Phone Number"></input></div>
                <div className="sendInquiryButtonContainer pa4">
                  <NavLink to="/services" className="white">
                    <div className="sendInquiryButton ttu pv3 tc">
                      Send
                    </div>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ContactUs;
