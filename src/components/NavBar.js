import React, { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../pages/style.css';
import '../App.css';

import LogoIcon from '../assets/bookmarkd_logo_03.svg';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function NavBar(props) {

  return (
    <div className="navbar-body">
      <div className="navbar inner">
        <a href="/main-home">
          <div>
          <img className="navbar-logo" src={LogoIcon}/>
          <h3 className="navbar-title">Book<span style={{color: '#0FC662'}}>Mark'd</span></h3>
          </div>
        </a>
        <div>
          <Link className="dark-link" to="/main-home" onClick={() => document.getElementById('how-it-works').scrollIntoView({behavior: "smooth"})}>How it Works</Link>
          <FiberManualRecordIcon/>
          <Link className="dark-link" onClick={() => document.getElementById('our-mission').scrollIntoView({behavior: "smooth"})}>Our Mission</Link>
          <FiberManualRecordIcon/>
          <Link className="dark-link" onClick={() => document.getElementById('contact-us').scrollIntoView({behavior: "smooth"})}>Contact Us</Link>
          <FiberManualRecordIcon/>
          <a className="dark-link" href='/marketplace'>Marketplace</a>
        </div>
        <div>
          <Link to="/log-in"><button className="sign-up-button mini-btn-medium" onClick={() => props.setMode("signup")}>Sign Up</button></Link>
          <Link to="/log-in"><button className="log-in-button mini-btn-medium" onClick={() => props.setMode("login")}>Log In</button></Link>
          {/* <button className="sign-up-button mini-btn-medium" onClick={() => props.setMode("signup")}>Sign Up</button> */}
          {/* <button className="log-in-button mini-btn-medium" onClick={() => props.setMode("login")}>Log In</button> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
