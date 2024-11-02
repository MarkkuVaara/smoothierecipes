import React, { useState } from 'react';
import Blogimage1 from '../images/blogimage1.jpg';
import Blogimage2 from '../images/blogimage2.jpg';
import Blogimage3 from '../images/blogimage3.jpg';

const Blog = () => {

    return (
        <div className="blogpage">
            <div className="blogs">
                <div className="blog">
                    <div className="blogimages">
                        <img className="blogimage" src={Blogimage1} alt={Blogimage1} title="Banana and strawberry smoothies in jars" />
                    </div>
                    <div className="blogtext">
                        <h3>Blog post 1</h3>
                        <p><strong>**Kickstart Your Day with a Berrylicious Smoothie**</strong></p>
                        <p>Smoothies are the ultimate way to start your day with a burst of energy. 
                            A classic favorite is the strawberry smoothie - simple, delicious, and packed with nutrients. 
                            With just a few ingredients, you can blend up a refreshing drink that's both satisfying and healthy.</p>
                        <p>To make a perfect strawberry smoothie, all you need are fresh or frozen strawberries,
                            a banana for added creaminess, yogurt for that rich texture, and a splash of milk to bring it all together.
                            Add a teaspoon of honey for a touch of sweetness, and you've got a vibrant, fruity drink that's perfect for
                            breakfast or a midday snack. Plus, smoothies are incredibly versatile, so feel free to toss in some spinach 
                            or protein powder to make it your own!
                        </p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blogimages">
                        <img className="blogimage" src={Blogimage2} alt={Blogimage2} title="Simple smoothies in glass bottles" />
                    </div>
                    <div className="blogtext">
                        <h3>Blog post 2</h3>
                        <p><strong>**Why Smoothies Are You New Best Friend **</strong></p>
                        <p>If you're looking for a quick and easy way to pack more fruits and veggies into your diet,
                            smoothies are your new best friend. Not only are they incredibly versatile, but they're also a 
                            delicious way to get a hefty dose of vitamins and antioxidants without much effort.
                        </p>
                        <p>Take the strawberry smoothie, for example. It's a classic choice that's both nutritious and tasty.
                            With the natural sweeetness of strawberries, a bit of yogurt for probiotics, and a banana for potassium,
                            this smoothie is a powerhouse of nutrition. Whether you're trying to eat healthier or just need a quick 
                            meal on the go, smoothies are perfect solution. Blend, sip, and enjoy!
                        </p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blogimages">
                        <img className="blogimage" src={Blogimage3} alt={Blogimage3} title="Banana and strawberry smoothies in jars" />
                    </div>
                    <div className="blogtext"> 
                        <h3>Blog post 3</h3>
                        <p><strong>**More to come**</strong></p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blogtext"> 
                        <h3>Blog post 4</h3>
                        <p><strong>**More to come**</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Blog;
