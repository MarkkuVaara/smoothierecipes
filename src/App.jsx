
import React, { useState, useEffect, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import logo from './images/apple_logo.png';

const App = () => {

  return (

    <div className="mainapp">
      <div className="banner">
        <img className="applelogo" src={logo} alt={logo} />
        <h3>Home</h3>
        <h3>Recipes</h3>
        <h3>About us</h3>
        <h3>Blog</h3>
      </div>
      <div className="main">
        <h1>Recipes here</h1>
        <p>Lorem ipsum</p>
      </div>
    </div>

  )

}

export default App;
