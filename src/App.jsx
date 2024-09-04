
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

  return (

    <div className="mainapp">
      <Router>
      <div className="banner">
        <img className="applelogo" src={logo} alt={logo} />
        <Link to="/" style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
        <Link to="/recipes" style={{ textDecoration: 'none' }}><h3>Recipes</h3></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><h3>About us</h3></Link>
        <Link to="/blog" style={{ textDecoration: 'none' }}><h3>Blog</h3></Link>
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
