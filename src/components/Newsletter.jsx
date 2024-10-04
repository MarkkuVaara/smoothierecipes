import React from 'react';
 
const Newsletter = (props) => {

  return (
    <div className="popup-box">
      <div className="newsletter-box">
        <div>
          <div onClick={props.handleClose}>Send</div>
        </div>   
        <div className="newsletter-close-icon">
          <div onClick={props.handleClose}>Close</div>
        </div>
      </div>
    </div>
  );

};

export default Newsletter;
