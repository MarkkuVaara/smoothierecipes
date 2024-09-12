import React, { useState } from 'react';
import Banana from '../images/banana.jpg';
import Blueberry from '../images/blueberry.jpg';
import Strawberry from '../images/strawberry.jpg';

const Recipes = (props) => {

    return (
        <div className="recipiespage">
            <div className="recipe">
                <img className="recipeimage" src={Banana} alt={Banana} />
                <div className="recipetext">
                    <h3>BANANAAAAAA!</h3>
                    <div className="rectext">
                        <p>Ingredients:</p>
                    </div>
                </div>
            </div>
            <div className="recipe">
                <img className="recipeimage" src={Blueberry} alt={Blueberry} />
                <div className="recipetext">
                    <h3>Blueberry</h3>
                </div>
            </div>
            <div className="recipe">
                <img className="recipeimage" src={Strawberry} alt={Strawberry} />
                <div className="recipetext">
                    <h3>Strawberry</h3>
                </div>
            </div>
        </div>
    )
}

export default Recipes;
