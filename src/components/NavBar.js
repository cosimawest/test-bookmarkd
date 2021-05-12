import React, { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../pages/style.css';
import '../App.css';

import LogoIcon from '../assets/bookmarkd_logo_03.svg';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function NavBar() {
  return (
    <div className="navbar-body">
      <div className="navbar inner">
        <Link to="/main-home">
          <div>
          <img className="navbar-logo" src={LogoIcon}/>
          <h3 className="navbar-title">Book<span style={{color: '#0FC662'}}>Mark'd</span></h3>
          </div>
        </Link>
        <div>
          <Link>How it Works</Link>
          <FiberManualRecordIcon/>
          <Link>Our Mission</Link>
          <FiberManualRecordIcon/>
          <Link to='/marketplace'>Marketplace</Link>
          <FiberManualRecordIcon/>
          <Link>Contact Us</Link>
        </div>
        <div>
          <button className="sign-up-button mini-btn-medium">Sign Up</button>
          <button className="log-in-button mini-btn-medium">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
