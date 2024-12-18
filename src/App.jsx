
import React, { useState, useEffect, useRef } from 'react';
import {
  Routes, Route, Link,
  useNavigate
} from 'react-router-dom';

import logo from './images/apple_logo.png';
import xxx from './images/xxxxx.jpg';
import fbook from './images/fbook.jpg';
import lin from './images/lin.jpg';
import ttok from './images/ttok.jpg';
import insgram from './images/insgram.jpg';
import menuicon from './images/menuicon.png';

import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Blog from './components/Blog';
import Popup from './components/Popup';
import Newsletter from './components/Newsletter';
import Subscription from './components/Subscription';

const App = () => {

  const [subtitle, setSubtitle] = useState(<h3 className="frontfont">WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div></h3>);
  const [subpage, setSubpage] = useState(3);
  const [popUp, setPopUp] = useState("startwindow");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef(null);

  const toggleSidebar = () => setIsNavOpen(!isNavOpen);

  const togglePopUp = (dataName) => {
    setPopUp(dataName);
  };

  const handleSubscription = () => {
    alert("Boop! (Here e-mail check)");
    setPopUp("subscriptionwindow");
  }

  const handleSlideChange = (slideIndex) => {
    setSubpage(slideIndex);
  };

  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/');
  }

  return (

    <div className="mainapp">

      <div className="banner">
        <div>
          <img className="applelogo" src={logo} alt={logo} onClick={() => { gotoHome(); 
              setSubtitle(<h3 className="frontfont">WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div> </h3>); 
              setSubpage(3); } } />
        </div>
        <Link to="/" className="linkStyle" onClick={() => { setSubtitle(<h3 className="frontfont">WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div> </h3>); 
          setSubpage(3); }} ><h2>HOME</h2></Link>
        <Link to="/recipes" className="linkStyle" onClick={() => { setSubtitle(<div className="subpagenav">
            <button onClick={() => setSubpage(0)}><h3>BANANA</h3></button> 
            <button onClick={() => setSubpage(1)}><h3>BLUEBERRY</h3></button> 
            <button onClick={() => setSubpage(2)}><h3>STRAWBERRY</h3></button>
          </div>); setSubpage(0); }} ><h2>RECIPES</h2></Link>
        <Link to="/about" className="linkStyle" onClick={() => { setSubtitle(<h3>MEET THE TEAM</h3>); 
          setSubpage(3); }} ><h2>ABOUT US</h2></Link>
        <Link to="/blog" className="linkStyle" onClick={() => { setSubtitle(<h3>SMOOTHIE BLOG</h3>); 
          setSubpage(3); }} ><h2>BLOG</h2></Link>
      </div>

      <div className="mobile-banner">
        <div>
          <img className="applelogo" src={logo} alt={logo} onClick={() => { gotoHome(); 
            setSubtitle(<h3 className="frontfont">WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div> </h3>); 
            setSubpage(3); } } />
        </div>
        <button onClick={toggleSidebar} className="menu-btn">
          <img className="menulogo" src={menuicon} alt={menuicon} />
        </button>
        <div className={`mobile-nav ${isNavOpen ? 'open' : 'closed'}`}>
          <button onClick={toggleSidebar} className="menu-btn close-btn">
            Close
          </button>
          <Link to="/" className="linkStyle" onClick={() => { setSubtitle(<h3 className="frontfont">WELCOME TO THE <div className="megrimfont">FRUITY FUEL!</div> </h3>); 
            setSubpage(3); 
            toggleSidebar(); }} ><h2>HOME</h2></Link>
          <Link to="/recipes" className="linkStyle" onClick={() => { setSubtitle(<div className="subpagenav">
              <button onClick={() => setSubpage(0)}><h3>BANANA</h3></button> 
              <button onClick={() => setSubpage(1)}><h3>BLUEBERRY</h3></button> 
              <button onClick={() => setSubpage(2)}><h3>STRAWBERRY</h3></button>
            </div>); setSubpage(0); toggleSidebar(); }} ><h2>RECIPES</h2></Link>
          <Link to="/about" className="linkStyle" onClick={() => { setSubtitle(<h3>MEET THE TEAM</h3>); 
            setSubpage(3); 
            toggleSidebar(); }} ><h2>ABOUT US</h2></Link>
          <Link to="/blog" className="linkStyle" onClick={() => { setSubtitle(<h3>SMOOTHIE BLOG</h3>); 
            setSubpage(3); 
            toggleSidebar(); }} ><h2>BLOG</h2></Link>
        </div>
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

    </div>

  )

}

export default App;
