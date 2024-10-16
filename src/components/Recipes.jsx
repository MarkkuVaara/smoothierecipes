import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Banana from '../images/banana.jpg';
import Blueberry from '../images/blueberry.jpg';
import Strawberry from '../images/strawberry.jpg';
import leftarrow from '../images/leftarrow.jpg';
import rightarrow from '../images/rightarrow.jpg';

const Recipes = ({ subpage, onSlideChange }) => {

    return (
        <div className="recipiespage">
            <Slider dots={false} infinite={true} speed={500} slidesToShow={1}
                slidesToScroll={1} autoplay={false} autoplaySpeed={3000} initialSlide={subpage} key={subpage}
                beforeChange={(current, next) => onSlideChange(next)}>
            <div className="recipe subpageban">
                <img className="recipeimage" src={Banana} alt={Banana} title="Banana smoothie in a jar" />
                <div className="recipetext">
                    <h2>BANANAAAAAA!</h2>
                    <div className="rectext">
                        <strong><h4>INGREDIENTS:</h4></strong>
                        <h4>- 1 ripe banana</h4>
                        <h4>- 1 cup of milk (or almond milk for a dairy-free option)</h4>
                        <h4>- 1/2 cup yogurt (plain or vanilla)</h4>
                        <h4>- 1 tablespoon honey or maple syrup (optional)</h4>
                        <h4>- A handful of ice cubes</h4>
                    </div>
                    <div className="rectext">
                        <strong><h4>INSTRUCTIONS:</h4></strong>
                        <h4>1. Peel the banana and place it to the blender.</h4>
                        <h4>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</h4>
                        <h4>3. Toss in a handful of ice cubes.</h4>
                        <h4>4. Blend until smooth and creamy.</h4>
                        <h4>5. Pour into a glass and enjoy!</h4>
                    </div>
                </div>
            </div>
            <div className="recipe subpageblue">
                <img className="recipeimage" src={Blueberry} alt={Blueberry} title="Blueberry smoothie in a jar" />
                <div className="recipetext">
                    <h2>BLUEBERRIESSS!!!</h2>
                    <div className="rectext">
                        <strong><h4>INGREDIENTS:</h4></strong>
                        <h4>- 1 cup of fresh or frozen blueberries</h4>
                        <h4>- 1 cup of milk (or almond milk for a dairy-free option)</h4>
                        <h4>- 1/2 cup yogurt (plain or vanilla)</h4>
                        <h4>- 1 tablespoon honey or maple syrup (optional)</h4>
                        <h4>- A handful of ice cubes</h4>
                    </div>
                    <div className="rectext">
                        <strong><h4>INSTRUCTIONS:</h4></strong>
                        <h4>1. Place the blueberries in a blender.</h4>
                        <h4>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</h4>
                        <h4>3. Toss in a handful of ice cubes.</h4>
                        <h4>4. Blend until smooth and creamy.</h4>
                        <h4>5. Pour into a glass and enjoy!</h4>
                    </div>
                </div>
            </div>
            <div className="recipe subpagestraw">
                <img className="recipeimage" src={Strawberry} alt={Strawberry} title="Strawberry smoothie in a jar" />
                <div className="recipetext">
                    <h2>STRAWBERRYYY!!!</h2>
                    <div className="rectext">
                        <strong><h4>INGREDIENTS:</h4></strong>
                        <h4>- 1 cup of fresh or frozen strawberries</h4>
                        <h4>- 1 cup of milk (or almond milk for a dairy-free option)</h4>
                        <h4>- 1/2 cup yogurt (plain or vanilla)</h4>
                        <h4>- 1 tablespoon honey or maple syrup (optional)</h4>
                        <h4>- A handful of ice cubes</h4>
                    </div>
                    <div className="rectext">
                        <strong><h4>INSTRUCTIONS:</h4></strong>
                        <h4>1. Place the strawberries in the blender.</h4>
                        <h4>2. Add the milk, yogurt, and honey or maple syrup if you want a bit of sweetness.</h4>
                        <h4>3. Toss in a handful of ice cubes.</h4>
                        <h4>4. Blend until smooth and creamy.</h4>
                        <h4>5. Pour into a glass and enjoy!</h4>
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
