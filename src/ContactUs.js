import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './contactUs.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      name:"",
      message:"",
      phone:"",
    }
    this.sendEmail =  this.sendEmail.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange(event){
    this.setState({
      email: event.target.value
    })
  }

  handleMessageChange(event){
    this.setState({
      message: event.target.value
    })
  }

  handlePhoneChange(event){
    this.setState({
      phone: event.target.value
    })
  }

  sendEmail(e){
    e.preventDefault()
    fetch('http://192.168.0.24:3010/api/sendEmail',
    { method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:this.state.email,
        name:this.state.name,
        message:this.state.message,
        phone:this.state.phone,
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        alert('email sent')
      }
      else{
        alert('failed to send email, please try again')
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="contactUsContainer">
          <div className="contactUsTitle f1 tc">
            Contact Us
          </div>
          <div className="contactUsContent">
            <div className="boldContactUsText">
              Drop us a line!
            </div>
            <div className="contactUsFormContainer mt4">
              <form>
                <div><input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/></div>
                <div><input type="email" placeholder="Email*" value={this.state.email} onChange={this.handleEmailChange}/></div>
                <div><textarea placeholder="Message" rows="5" value={this.state.message} onChange={this.handleMessageChange}/></div>
                <div><input type="text" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/></div>
                <div className="sendInquiryButtonContainer pa4">
                  <button onClick={this.sendEmail} className="white">
                    <div className="ttu pv3 tc">
                      Send
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="belowContactUsForm tc pb6">
              <div className="boldContactUsText pt5 pb3">
                Better yet, see us in person!
              </div>
              We love to meet our customers, so please call or email us to set up a meeting
              <div className="boldContactUsText pt5 pb3">
                Affine Weddings
              </div>
              1833-AFF-INE0
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ContactUs;
