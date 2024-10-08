import React from 'react';
import logo from '../images/apple_logo.png';
 
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
        <div className="newsletter-close-icon">
          <div onClick={props.handleClose}>Close</div>
        </div>
      </div>
    </div>
  );

};

export default Newsletter;
