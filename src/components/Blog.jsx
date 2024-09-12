import React, { useState } from 'react';
import Blogimage1 from '../images/blogimage1.jpg';
import Blogimage2 from '../images/blogimage2.jpg';

const Blog = () => {

    return (
        <div className="blogpage">
            <div className="blogimages">
                <img className="blogimage" src={Blogimage1} alt={Blogimage1} />
                <img className="blogimage" src={Blogimage2} alt={Blogimage2} />
            </div>
            <div className="blogs">
                <div>
                    <h3>Blog 1</h3>
                    <p>Lorem ipsum</p>
                </div>
                <div>
                    <h3>Blog 2</h3>
                    <p>Lorem ipsum</p>
                </div>
                <div>
                    <h3>Blog 3</h3>
                    <p>Lorem ipsum</p>
                </div>
                <div>
                    <h3>Blog 4</h3>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </div>
    )

}

export default Blog;
