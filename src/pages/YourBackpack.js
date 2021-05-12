import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import NavBar from '../components/NavBarTwo.js';

import BubbleIcon03 from '../assets/bubble-icon-03.svg';



function YourBackpack() {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const [marked, setMarked] = useState(false);


  return (
    <div className="your-backpack">
        <NavBar/>

        <div className="spacer">&nspb;</div>

        <div className="bubble-top-right">
            <img src={BubbleIcon03}/>
        </div>
        
        <div className="marketplace__inner inner">
            <div className="marketplace-title your-backpack">
                <h2 className="dropshadow">Your Backpack</h2>
            </div>
            <div className="backpack-item">
                <hr/>
                <div className="two-column__container">
                    <div className="left-column">
                        <div className="backpack-item__title">“Algorithms to Live By”</div>
                        <div className="backpack-item__isbn">ISBN: 90358025823529</div>
                        <div className="profile-banner__container">
                            <div className="profile-icon-mini">&nbsp;</div>
                            <div>
                                <div className="profile-banner__name">Megan '22</div>
                                <div className="profile-banner__location">
                                    <div>Gainesville, FL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="backpack-item__price">$50.00</div>
                        <button className="btn-mini quickview-button">Quickview</button>
                        <button className="btn-mini remove-button" style={{backgroundColor:"#55896B"}}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="backpack-item">
                <hr/>
                <div className="two-column__container">
                    <div className="left-column">
                        <div className="backpack-item__title">“Algorithms to Live By”</div>
                        <div className="backpack-item__isbn">ISBN: 90358025823529</div>
                        <div className="profile-banner__container">
                            <div className="profile-icon-mini">&nbsp;</div>
                            <div>
                                <div className="profile-banner__name">Megan '22</div>
                                <div className="profile-banner__location">
                                    <div>Gainesville, FL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="backpack-item__price">$50.00</div>
                        <button className="btn-mini quickview-button">Quickview</button>
                        <button className="btn-mini remove-button" style={{backgroundColor:"#55896B"}}>Remove</button>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <div className="backpack-item">
                    <div className="side-by-side">
                        <div className="side-by-side" style={{fontSize:"2rem"}}>
                            <div style={{paddingRight:"4rem"}}>Total:</div>
                            <div>$85.99</div>
                        </div>
                        <button className="btn-confined">Checkout with STRIPE</button>

                    </div>

                    <div className="side-by-side">
                        <a>Purchasing Policy</a>
                        <a>Terms & Privacy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default YourBackpack;
