import React from 'react';
import logo from '../images/apple_logo.png';
 
const Subscription = (props) => {

  return (
    <div className="popup-box">
      <div className="newsletter-box">
        <img className="newsletter-applelogo" src={logo} alt={logo}></img>
        <div className="newsletter-texts">
            <p><strong>Subscribe</strong>, to keep in touch!</p>
        </div>  
        <div className="newsletter-close-icon">
          <div onClick={props.handleClose}>Close</div>
        </div>
      </div>
    </div>
  );

};

export default Subscription;
