import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './aboutUs.css';
import aboutUsCakeImg from './imgs/aboutUsCake.png';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="aboutUsContainer">
          <div className="leftContainer">
            <h1><div className="aboutUsTitle">
              About Us
            </div></h1>
            <h3><div className="aboutUsText">
              <p>
                My name is Manprit Bola and I am the owner and
                lead wedding coordinator for Affine Weddings based
                in Surrey, British Columbia, Canada.
                I am a certified wedding planner through
                The Wedding Planner Institute of Canada
                <a href="https://www.wipc.ca" target="_blank" rel="noopener noreferrer">(www.wipc.ca)</a>.
              </p>
              <p><br/></p>
              <p>
                Weddings are our passion and destination weddings
                are our speciality. We understand weddings are associated
                with a lot of dreams and expectations. This union is a
                combination of traditions, family, rituals and celebrations.
                We take the time to get to know your and your
                family’s expectations first. At Affine Weddings,
                we truly understand the importance of a well-planned,
                well-balanced wedding that fits your budget without
                compromising your dreams. We fulfill all wedding
                coordinator duties. We treat your wedding with as much
                energy and dedication as it were our own. We feel that
                the most rewarding part of being wedding coordinators is
                having the opportunity to work so closely with such diverse
                personalities, cultures and families.
              </p>
              <p>
                We pride ourselves on providing exceptional service to
                our clients and always looking for new ways to make your
                wedding the best experience of your life and if you have
                a vision, we will do whatever it takes to make it happen.
                After years of wedding planning and knowledge of the wedding
                industry, we have the right tools and tactics to give you
                a stress free wedding. Leave the planning and coordination
                to us and enjoy every moment.
              </p>
              <br/>
              <p>
                Send us an email today or give us a quick call for a
                no obligation consultation.
              </p>
              <br/>
              <p className="pb3">
                Let the planning begin!!!
              </p>
            </div></h3>
          </div>
          <div className="rightContainer">
            <div className="cakeImageContainer pb2 tc">
              <img src={aboutUsCakeImg} alt="cakeImg"/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;
