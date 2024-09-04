
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import logo from './images/apple_logo.png';

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
          <Route path="/" element={<div><h3>Home</h3></div>} />
          <Route path="/recipes" element={<div><h3>Recipes</h3></div>} />
          <Route path="/about" element={<div><h3>About us</h3></div>} />
          <Route path="/blog" element={<div><h3>Our blog</h3></div>} />
        </Routes>
      </div>
      </Router>
    </div>

  )

}

export default App;
