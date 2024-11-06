import React, { useState } from 'react';
import Frontpagesmoothie from '../images/frontpagesmoothie.jpg';

const Home = (props) => {

    return (
        <div className="frontpage">
            <div className="smoothieimages">
                <img className="smoothieimage" src={Frontpagesmoothie} alt={Frontpagesmoothie} title="Smoothies in glasses"/>
                <p>Smoothies in glasses</p>
            </div>
            <div className="fronttext">
                <h3>Welcome to the FRUITY FUEL! Discover delicious and nutritious smoothie ideas tailored to your taste. Whether you're craving something fruity, green, or indulgent, we've got the perfect blend for you.</h3>
                <h2>Let's get BLENDING!</h2>
                <div className="newsletter">
                    <button className="letterimage" onClick={() => props.newsletter()}> </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
