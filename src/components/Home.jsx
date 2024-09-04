import React, { useState } from 'react';
import Frontpagesmoothie from '../images/frontpagesmoothie.jpg';

const Home = () => {

    return (
        <div className="frontpage">
            <img className="smoothieimage" src={Frontpagesmoothie} alt={Frontpagesmoothie}/>
            <div>
                <p>Discover delicious and nutritious smoothie ideas tailored to your taste. Whether you're craving something fruity, green, or indulgent, we've got the perfect blend for you.</p>
                <h3>Let's get BLENDING!</h3>
            </div>
        </div>
    )
}

export default Home;
