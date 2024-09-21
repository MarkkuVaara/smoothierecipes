import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Banana from '../images/banana.jpg';
import Blueberry from '../images/blueberry.jpg';
import Strawberry from '../images/strawberry.jpg';
import leftarrow from '../images/leftarrow.jpg';
import rightarrow from '../images/rightarrow.jpg';

const Recipes = ({ subpage }) => {

    return (
        <div className="recipiespage">
            <Slider dots={true} infinite = {true} speed = {500} slidesToShow = {1}
                slidesToScroll = {1} autoplay = {false} autoplaySpeed = {3000} initialSlide = {subpage} key={subpage}>
            <div className="recipe">
                <img className="recipeimage" src={Banana} alt={Banana} />
                <div className="recipetext">
                    <h3>BANANAAAAAA!</h3>
                    <div className="rectext">
                        <strong><p>Ingredients:</p></strong>
                        <p>- 1 ripe banana</p>
                        <p>- 1 cup of milk (or almond milk for a dairy-free option)</p>
                        <p>- 1/2 cup yogurt (plain or vanilla)</p>
                        <p>- 1 tablespoon honey or maple syrup (optional)</p>
                        <p>- A handful of ice cubes</p>
                    </div>
                    <div className="rectext">
                        <strong><p>Instructions:</p></strong>
                        <p>1. Peel the banana and place it to the blender.</p>
                        <p>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</p>
                        <p>3. Toss in a handful of ice cubes.</p>
                        <p>4. Blend until smooth and creamy.</p>
                        <p>5. Pour into a glass and enjoy!</p>
                    </div>
                </div>
            </div>
            <div className="recipe">
                <img className="recipeimage" src={Blueberry} alt={Blueberry} />
                <div className="recipetext">
                    <h3>Blueberriesss!!!</h3>
                    <div className="rectext">
                        <strong><p>Ingredients:</p></strong>
                        <p>- 1 cup of fresh or frozen blueberries</p>
                        <p>- 1 cup of milk (or almond milk for a dairy-free option)</p>
                        <p>- 1/2 cup yogurt (plain or vanilla)</p>
                        <p>- 1 tablespoon honey or maple syrup (optional)</p>
                        <p>- A handful of ice cubes</p>
                    </div>
                    <div className="rectext">
                        <strong><p>Instructions:</p></strong>
                        <p>1. Place the blueberries in a blender.</p>
                        <p>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</p>
                        <p>3. Toss in a handful of ice cubes.</p>
                        <p>4. Blend until smooth and creamy.</p>
                        <p>5. Pour into a glass and enjoy!</p>
                    </div>
                </div>
            </div>
            <div className="recipe">
                <img className="recipeimage" src={Strawberry} alt={Strawberry} />
                <div className="recipetext">
                    <h3>Strawberryyy!!!</h3>
                    <div className="rectext">
                        <strong><p>Ingredients:</p></strong>
                        <p>- 1 cup of fresh or frozen strawberries</p>
                        <p>- 1 cup of milk (or almond milk for a dairy-free option)</p>
                        <p>- 1/2 cup yogurt (plain or vanilla)</p>
                        <p>- 1 tablespoon honey or maple syrup (optional)</p>
                        <p>- A handful of ice cubes</p>
                    </div>
                    <div className="rectext">
                        <strong><p>Instructions:</p></strong>
                        <p>1. Place the strawberries in the blender.</p>
                        <p>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</p>
                        <p>3. Toss in a handful of ice cubes.</p>
                        <p>4. Blend until smooth and creamy.</p>
                        <p>5. Pour into a glass and enjoy!</p>
                    </div>
                </div>
            </div>
            </Slider>
            <div className="arrows">
                <img className="arrowimage" src={leftarrow} alt={leftarrow}></img>
                <img className="arrowimage" src={rightarrow} alt={rightarrow}></img>
            </div>
        </div>
    )
}

export default Recipes;
