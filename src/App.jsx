
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import logo from './images/apple_logo.png';

import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Blog from './components/Blog';

const App = () => {

  const [subtitle, setSubtitle] = useState(<h3>WELCOME TO FRUITY FUEL!</h3>);

  return (

    <div className="mainapp">
      <Router>
      <div className="banner">
        <div>
          <img className="applelogo" src={logo} alt={logo} />
        </div>
        <Link to="/" onClick={() => setSubtitle(<h3>WELCOME TO FRUITY FUEL!</h3>)} style={{ textDecoration: 'none' }}><h2>HOME</h2></Link>
        <Link to="/recipes" onClick={() => setSubtitle(<h3>BANANA BLUEBERRY STRAWBERRY</h3>)} style={{ textDecoration: 'none' }}><h2>RECIPIES</h2></Link>
        <Link to="/about" onClick={() => setSubtitle(<h3>MEET THE TEAM</h3>)} style={{ textDecoration: 'none' }}><h2>ABOUT US</h2></Link>
        <Link to="/blog" onClick={() => setSubtitle(<h3>BLOG</h3>)} style={{ textDecoration: 'none' }}><h2>BLOG</h2></Link>
      </div>
      <div className="subtitle">
        {subtitle}
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<div><Home/></div>} />
          <Route path="/recipes" element={<div><Recipes/></div>} />
          <Route path="/about" element={<div><About/></div>} />
          <Route path="/blog" element={<div><Blog/></div>} />
        </Routes>
      </div>
      </Router>
    </div>

  )

}

export default App;
