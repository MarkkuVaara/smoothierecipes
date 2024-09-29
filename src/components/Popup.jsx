import React from 'react';
import Arrow from '../images/arrow.jpg';
import Apple from '../images/apple_logo.png';
 
const Popup = (props) => {

  return (
    <div className="popup-box">
      <div className="box">      
        <h1>FRUITY</h1>
        <img className="startlogo" src={Apple} alt={Apple}></img>
        <h1>FUEL</h1>
        <span className="close-icon" onClick={props.handleClose}>
          <img className="startarrow" src={Arrow} alt={Arrow}></img>
        </span>
      </div>
    </div>
  );

};

export default Popup;
