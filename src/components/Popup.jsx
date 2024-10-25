import React from 'react';
import Arrow from '../images/arrow.jpg';
import Apple from '../images/apple_logo.png';
 
const Popup = (props) => {

  return (
    <div className="popup-box">
      <div className="box">      
        <h1 className="starttext">FRUITY</h1>
        <img className="startlogo" src={Apple} alt={Apple}></img>
        <h1 className="starttext">FUEL</h1>
        <div className="close-icon">
          <h2 className="close-icontext">Step in</h2>
          <img className="startarrow" src={Arrow} alt={Arrow} onClick={props.handleClose} ></img>
        </div>
      </div>
    </div>
  );

};

export default Popup;
