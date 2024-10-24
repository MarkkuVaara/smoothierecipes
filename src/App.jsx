
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

import logo from './images/apple_logo.png';
import xxx from './images/xxxxx.jpg';
import fbook from './images/fbook.jpg';
import lin from './images/lin.jpg';
import ttok from './images/ttok.jpg';
import insgram from './images/insgram.jpg';

import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Blog from './components/Blog';
import Popup from './components/Popup';
import Newsletter from './components/Newsletter';
import Subscription from './components/Subscription';

const App = () => {

  const [subtitle, setSubtitle] = useState(<h3>WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div></h3>);
  const [subpage, setSubpage] = useState(3);
  const [popUp, setPopUp] = useState("startwindow");

  const togglePopUp = (dataName) => {
    setPopUp(dataName);
  };

  const handleSubscription = () => {
    setPopUp("subscriptionwindow");
  }

  const handleSlideChange = (slideIndex) => {
    setSubpage(slideIndex);
  };

  return (

    <div className="mainapp">
      <Router>

      <div className="banner">
        <div>
          <img className="applelogo" src={logo} alt={logo} />
        </div>
        <Link to="/" onClick={() => { setSubtitle(<h3>WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div> </h3>); setSubpage(3); }} style={{ textDecoration: 'none' }}><h2>HOME</h2></Link>
        <Link to="/recipes" onClick={() => { setSubtitle(<div className="subpagenav">
            <button onClick={() => setSubpage(0)}><h3>BANANA</h3></button> 
            <button onClick={() => setSubpage(1)}><h3>BLUEBERRY</h3></button> 
            <button onClick={() => setSubpage(2)}><h3>STRAWBERRY</h3></button>
          </div>); setSubpage(0);} } style={{ textDecoration: 'none' }}><h2>RECIPIES</h2></Link>
        <Link to="/about" onClick={() => { setSubtitle(<h3>MEET THE TEAM</h3>); setSubpage(3); }} style={{ textDecoration: 'none' }}><h2>ABOUT US</h2></Link>
        <Link to="/blog" onClick={() => { setSubtitle(<h3>SMOOTHIE BLOG</h3>); setSubpage(3); }} style={{ textDecoration: 'none' }}><h2>BLOG</h2></Link>
      </div>

      <div className={`subtitle recipe-${subpage}`}>
        {subtitle}
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<div><Home newsletter={() => togglePopUp("letterwindow")}/></div>} />
          <Route path="/recipes" element={<div>
              <Recipes subpage={subpage} onSlideChange={handleSlideChange}/>
            </div>} />
          <Route path="/about" element={<div><About/></div>} />
          <Route path="/blog" element={<div><Blog/></div>} />
        </Routes>
      </div>

      <div className={`footer footer-${subpage}`}>
        <h4>FOLLOW US ON VARIOUS LOCATIONS</h4>
        <img className="footerimage" src={xxx} alt={xxx}></img>
        <img className="footerimage" src={fbook} alt={fbook}></img>
        <img className="footerimage" src={lin} alt={lin}></img>
        <img className="footerimage" src={ttok} alt={ttok}></img>
        <img className="footerimage" src={insgram} alt={insgram}></img>
      </div>
      
      {popUp == "startwindow" &&
        <Popup handleClose={togglePopUp} />
      }

      {popUp == "letterwindow" &&
        <Newsletter handleClose={togglePopUp} handleSubscription={handleSubscription} />
      }

      {popUp == "subscriptionwindow" &&
        <Subscription handleClose={togglePopUp} />
      }

      </Router>
    </div>

  )

}

export default App;
