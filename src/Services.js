import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './services.css';
import {NavLink} from 'react-router-dom';
import monthOfWeddingImg from './imgs/serviceContentPic1.png';
import weddingCoordinationImg from './imgs/serviceContentPic2.png';
import fullCoordinationWeddingImg from './imgs/serviceContentPic3.png';
import destinationWeddingImg from './imgs/serviceContentPic4.png';
import travelAssistanceImg from './imgs/serviceContentPic5.png';

class Services extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="servicesContainer">
          <div className="servicesTitle tc">
            Wedding Coordination Services
          </div>
          <div className="servicesContent">
            <div className="container1">
              <div className="containerTitle f2">Month of Wedding Coordination</div>
              <div className="containerBody">
                <img src={monthOfWeddingImg} alt="Month Of Wedding Celebration"/>
                You have planned the perfect wedding… now let us worry about
                the details! This service is designed for couples who have
                planned their own wedding, but require assistance with
                finalizing all of the details. On your wedding day you can
                relax and feel assured that Affine Weddings is directing
                every detail to your specifications. We are also there to
                ensure any problems may be diverted such as weather concerns
                and vendor no-shows. Affine Weddings will take over your day
                of wedding coordination so that you can truly enjoy it with
                your family & friends.
              </div>
            </div>
            <div className="container2 f2">
              <div className="containerTitle f2">Wedding Coordination</div>
              <div className="containerBody">
                <img src={weddingCoordinationImg} alt="Wedding Coordination"/>
                This service is geared to couples who desire guidance in all
                aspects of planning the entire wedding. Your wedding should
                reflect your individual personalities and Affine Weddings is
                there to assist you in creating the wedding of your dreams.
                Together, we will guide you through every step of the wedding
                planning process and on your wedding day, you can relax and
                feel assured that Affine Weddings is directing every detail to
                the highest of standards… your own!
              </div>
            </div>
            <div className="container3 f2">
              <div className="containerTitle f2">Full Destination Wedding Coordination</div>
              <div className="containerBody">
                <img src={fullCoordinationWeddingImg} alt="Full Coordination Wedding Destination"/>
                The ultimate personalized service, designed to fulfill all of
                your destination wedding planning needs and includes onsite
                coordination to oversee all of the details of your wedding
                ceremony, reception and additional planned guest activities &
                excursions. This allows you to enjoy a customized wedding from
                start to finish. Upon arrival to the destination, you can take
                comfort in knowing that a dedicated wedding planner and travel
                expert is working personally with you, your family and your
                friends.
              </div>
            </div>
            <div className="container4 f2">
              <div className="containerTitle f2">Destination Wedding Planning</div>
              <div className="containerBody">
                <img src={destinationWeddingImg} alt="Destination Wedding Planning"/>
                For couples who desire guidance in all aspects of planning
                their entire wedding with the exception of having a wedding
                coordinator actually come onsite to the destination to
                coordinate. Together we will guide you through every step of
                the wedding planning process. Prior to your departure to the
                destination, Affine Weddings will finalize all details for you
                with the onsite coordinator and provide you with complete
                correspondence, finalized itineraries and all information to
                present onsite at the resort for your pre-wedding meeting.
              </div>
            </div>
            <div className="container5 f2">
              <div className="containerTitle f2">Travel Assistance</div>
              <div className="containerBody">
                <img src={travelAssistanceImg} alt="Travel Assistance"/>
                Affine Weddings is  a one stop shop where we provide our
                clients with wedding coordination, day of wedding coordination
                services. Also, assist you and your guests with all of your
                travel needs. We can handle group travels, honeymoons,
                Bachelorette trips, Stag trips and family vacations.

                <div className="findOUtMoreButtonContainer">
                  <a href="https://mbola.travelonly.com" target="_blank" rel="noopener noreferrer">
                    <div className="white findOutMoreButton ttu pv3">
                    Find Out More
                  </div>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servicesFooter bg-light-gray tc pt5 pb3">
          <div className="footerText">For more information on our Full Package details and Pricing</div>
          <div className="footerButtonContainer pa4">
            <NavLink to="/contactUs" className="white">
              <div className="footerContactUsButton ttu pv3">
              Contact Us
            </div>
            </NavLink>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Services;
