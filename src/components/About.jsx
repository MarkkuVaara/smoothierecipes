import React, { useState } from 'react';
import logo from '../images/apple_logo.png';
import markkuvaara from '../images/Markku Vaara.jpg';

const About = () => {

    return (
        <div className="aboutpage">
            <div className="person">
                <img className="personimage" src={logo} alt={logo} />
                <div className="persontext">
                    <h3>SAULI HOLAPPA, UI/UX DESIGNER</h3>
                    <p>Meet the designer. Creative force behind our project. Believes in design that's not just visually appealing but also enhances the user journey. By focusing on usability, accessibility, and user satisfaction, he creates designs that resonate with users and drive results.</p>
                </div>
            </div>
            <div className="persontwo">
                <div className="persontext">
                    <h3>MARKKU VAARA, DEVELOPER</h3>
                    <p>Markku believes in clean, efficient, and scalable code. By focusing on performance, security, and maintainability, he ensures that every line of code contributes to a robust and reliable product. From implementing complex features to optimizing performance, he has played a crucial role in bringing the current project to life.</p>
                </div>
                <img className="personimage" src={markkuvaara} alt={markkuvaara} />
            </div>
        </div>
    )
}

export default About;
