import React, { useState } from 'react';
import logo from '../images/apple_logo.png';

const About = () => {

    return (
        <div className="aboutpage">
            <div className="person">
                <img className="applelogo" src={logo} alt={logo} />
                <p>Sauli Holappa</p>
            </div>
            <div className="persontwo">
                <p>Markku Vaara</p>
                <img className="applelogo" src={logo} alt={logo} />
            </div>
        </div>
    )
}

export default About;
