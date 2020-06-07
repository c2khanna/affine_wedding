import React, { Component } from 'react';
import FbLogo from './imgs/icons/facebook.svg'
import TwitterLogo from './imgs/icons/twitter.svg'
import InstaLogo from './imgs/icons/instagram.svg'
import pinterestLogo from './imgs/icons/pinterest.svg'


class Footer extends Component {
  render() {
    return (
      <div className="h5 footer f4 bg-black">
        <div className="footerContent">
          <div className="icons">
            <a href="https://www.facebook.com/142262483167802" target="_blank" rel="noopener noreferrer">
              <img src={FbLogo} alt="fblogo"/>
            </a>
            <a href="https://twitter.com/affineweddings_" target="_blank" rel="noopener noreferrer">
              <img src={TwitterLogo} alt="TwitterLogo"/>
            </a>
            <a href="https://www.instagram.com/affineweddings_travelonly/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={InstaLogo} alt="InstaLogo"/>
            </a>
            <a href="https://www.pinterest.com/affineweddings/pins" target="_blank" rel="noopener noreferrer">
              <img src={pinterestLogo} alt="pinterestLogo"/>
            </a>
          </div>
          <div className="tc white pa3">
            Copyright © {new Date().getFullYear()} Affine Weddings - All Rights Reserved.
          </div>
          <hr width="10%"/>
        </div>
      </div>
    );
  }
}

export default Footer;
