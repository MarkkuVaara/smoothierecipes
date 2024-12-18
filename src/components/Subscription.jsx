import React from 'react';
import logo from '../images/apple_logo.png';
import thumbsup from '../images/thumbsup.jpg';
import close from '../images/close.jpg';
 
const Subscription = (props) => {

  return (
    <div className="popup-box">
      <div className="newsletter-box">
        <img className="newsletter-applelogo" src={logo} alt={logo}></img>
        <div className="subscription-texts">
            <img className="thumbimage" src={thumbsup} alt={thumbsup}></img>
            <p><strong>Thank you</strong> for your support!</p>
        </div>  
        <div className="newsletter-close-icon" onClick={props.handleClose}>
          <div>Close</div>
          <img src={close} alt={close}></img>
        </div>
      </div>
    </div>
  );

};

export default Subscription;
