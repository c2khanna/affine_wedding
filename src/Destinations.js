import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './destinations.css';
import mexicoFlag from './imgs/mexicoFlag.png';
import dominicanFlag from './imgs/dominicanFlag.png';
import jamaicaFlag from './imgs/jamaicaFlag.png';


class Destinations extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="destinationsContainer">
          <div className="requirementsContainer white pb5">
            <div className="requirement mexico">
              <div className="mexicoRequirementContent">
                <h1><div className="requirementCountryName ttu pb3">Mexico</div></h1>

                <h2><div className="requirementBody"><b>Language:</b> Spanish<br/>
                  <a href="www.visitmexico.com">www.visitmexico.com</a><br/>
                  <h3><div className="requirementsSubtitle pt3"><b>Wedding Requirements</b></div></h3>
                  <ul>
                    <li>In Mexico, only civil wedding ceremonies are legal; these
                      are officiated by a Justice of the Peace.</li>
                    <li>For the ceremony, you will both need certified copies of
                      your birth certificates that have been previously legalized
                      by the Consulate of Mexico with jurisdiction over the country
                      of birth.</li>
                    <li>
                      Couples also must bring passports and tourist cards
                      (passport is now an entry requirement). A blood test is also
                      required.
                    </li>
                    <li>
                      If either of you have previously been married, you must
                      prove that it has been one year since the official
                      dissolution of your last marriage or since the death of
                      your previous spouse. This will require certified copies of
                      the divorce decree or a certified death certificate.
                    </li>
                    <li>
                      The couple must also have two witnesses over age 18;
                      witnesses must be over age 18 and need to bring ID as well as
                      copies of the ID. It is also recommended that couples bring
                      two copies of all their documentation.
                    </li>
                    <li>
                      Also, plan to be in the country five days before your
                      ceremony to take care of translation of documents. Be sure to
                      check with your wedding coordinator before your wedding as
                      regulations are subject to change.
                    </li>
                    <li>
                      Each state in Mexico has its own marriage laws so some
                      regulations may vary from state to state.
                    </li>
                  </ul>
                </div></h2>
              </div>
            </div>
            <div className="requirement dominicanRepublic">
              <div className="dominicanRequirementContent">
                <h1><div className="requirementCountryName ttu pb4">Dominican Republic</div></h1>
                <h2><div className="requirementBody">
                  Residency Period: None<br/>Waiting Period: None<br/>
                  <b>Language:</b> Dominican<br/>
                  <a href="www.dominicanrepublic.com">www.dominicanrepublic.com</a><br/>
                  <h3><div className="requirementsSubtitle pt3"><b>Wedding Requirements</b></div></h3>
                  <br/>
                  Weddings in the Dominican Republic are easy to arrange, thanks
                  to local laws. Most larger hotels and resorts have on-site
                  wedding coordinators to help with every detail from paperwork
                  to photography. Coordinators need at least 15 days notice (but
                    prefer at least three months to work out all the special
                    details). Couples that wish to get married in the Dominican
                    Republic will need to present the following documents in
                    person or by mail to the Dominican Rep. Consulate or Dominican
                    Republic Services (a company in Toronto which assists with
                      the paperwork and legalities for getting married in the
                      Dominican Rep.):
                  <ul>
                    <li>Valid passport (if sending by mail, send a
                      photocopy of the page with the picture in it)</li>
                    <li>Original birth certificate that includes the names of
                      the parents. (translated in Spanish)</li>
                    <li>Single Status Affidavit (translated in Spanish)
                      (One per person).</li>
                    <li>Divorce Act (if married before) (translated in Spanish).</li>
                  </ul>
                </div></h2>
              </div>
            </div>
            <div className="requirement jamaica">
              <div className="jamaicaRequirementContent">
                <h1><div className="requirementCountryName ttu pb4">Jamaica</div></h1>
                <h2><div className="requirementBody">
                  Residency Period: 24 hours <br/>
                  <b>Language:</b> English<br/>
                  <a href="www.visitjamaica.com">www.visitjamaica.com</a><br/>
                  Residency Period: You can marry after just 24 hours on the
                  island if you’ve applied for your license and supplied all the
                  necessary forms<br/>
                  <h3><div className="requirementsSubtitle pt3"><b>Wedding Requirements</b></div></h3>
                  <ul>
                    <li>Proof of citizenship (either a passport or a certified
                      copy of the birth certificates signed by a notary public)</li>
                    <li>Written parental consent for those under 18 years of age</li>
                    <li>Proof of divorce with the original or certified copy of
                      the divorce decree if applicable</li>
                    <li>Copy of death certificate if a previous marriage
                      ended in death.</li>
                  </ul>
                </div></h2>
              </div>
            </div>
          </div>
          <div className="locationsContainer bg-light-gray">
            <div className="location mexicoFlag">
              <h2><div className="locationHeading">
                Mexico
              </div></h2>
              <img src={mexicoFlag} alt="mexicoFlag"/>
              <h3><div className="citiesIncountries">
                Mexico Destination Weddings Locations
                <ul className="listOfCities">
                  <li>Cancun</li>
                  <li>Puerto Vallarta</li>
                  <li>Los Cabos</li>
                </ul>
              </div></h3>
            </div>
            <div className="location dominicanRepublicFlag">
              <h2><div className="locationHeading">
                Dominican Republic
              </div></h2>
              <img src={dominicanFlag} alt="dominicanFlag"/>
              <h3><div className="citiesIncountries">
                Dominican Republic Destination Weddings Locations
                <ul className="listOfCities">
                  <li>Punta Cana</li>
                  <li>Puerto Plata</li>
                  <li>Palma Real</li>
                </ul>
              </div></h3>
            </div>
            <div className="location jamaicaFlag">
              <h2><div className="locationHeading">
                Jamaica
              </div></h2>
              <img src={jamaicaFlag} alt="jamaicaFlag"/>
              <h3><div className="citiesIncountries">
                Jamaica Destination Weddings Locations
                <ul className="listOfCities">
                  <li>Montego Bay</li>
                  <li>Negril</li>
                  <li>Ocho Rios</li>
                </ul>
              </div></h3>
            </div>
          </div>
          <div className="bookingContainer white">
            <h1><div className="bookingTextContainer">
              To Book Destination Weddings
            </div></h1>
            <div className="bookingContactUsButtonContainer pa4">
              <a href="https://affineweddings.travelonly.com" target="_blank" rel="noopener noreferrer">
                <div className="white bookingContactUsButton tc ttu pv3">
                Click Here
              </div>
            </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Destinations;
