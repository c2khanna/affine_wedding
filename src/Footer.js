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
            <img src={FbLogo} alt="fblogo"/>
            <img src={TwitterLogo} alt="TwitterLogo"/>
            <img src={InstaLogo} alt="InstaLogo"/>
            <img src={pinterestLogo} alt="pinterestLogo"/>
          </div>
          <div className="tc white pa3">
            Copyright © 2017 Affine Weddings - All Rights Reserved.
          </div>
          <hr width="10%"/>
        </div>
      </div>
    );
  }
}

export default Footer;
