
import React, { useState, useEffect, useCallback } from 'react';
import logo from './images/apple_logo.png';

const App = () => {

  return (

    <div className="mainapp">
      <div className="banner">
        <img className="applelogo" src={logo} alt={logo} />
        <p>Home</p>
        <p>Recipes</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
      <div className="main">
        <p>Recipes here</p>
      </div>
    </div>

  )

}

export default App;
