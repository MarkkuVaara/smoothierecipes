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
        </div>
    )
}

export default Recipes;
