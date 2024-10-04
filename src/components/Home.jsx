import React, { useState } from 'react';
import Frontpagesmoothie from '../images/frontpagesmoothie.jpg';

const Home = (props) => {

    return (
        <div className="frontpage">
            <img className="smoothieimage" src={Frontpagesmoothie} alt={Frontpagesmoothie} title="smoothies in glasses"/>
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
