import React from 'react';
import logo from '../images/apple_logo.png';
import close from '../images/close.jpg';
 
const Newsletter = (props) => {

  return (
    <div className="popup-box">
      <div className="newsletter-box">
        <img className="newsletter-applelogo" src={logo} alt={logo}></img>
        <div className="newsletter-texts">
            <p><strong>Subscribe</strong>, to keep in touch!</p>
            <input placeholder="Enter your e-mail here" />
        </div>
        <div className="newsletter-send-icon">
          <div onClick={props.handleSubscription}>Send</div>
        </div>   
        <div className="newsletter-close-icon" onClick={props.handleClose}>
          <div className="close-icontext">Close</div>
          <img src={close} alt={close}></img>
        </div>
      </div>
    </div>
  );

};

export default Newsletter;
