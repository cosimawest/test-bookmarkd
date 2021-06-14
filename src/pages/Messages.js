import React, { useState, useEffect } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';
import BookCard from '../components/BookCard.js';


import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';



import NoMessages from '../assets/no-messages-icon.svg';
import TextbookImage from '../assets/test-textbook-image.png';




function Messages() {
  const [x, setX] = useState(true);
  const [textbookSelected, setTextbookSelected] = useState(false);
  const [marked, setMarked] = useState(false);

  const soldCheckbox = ({ target: { checked } }) => {
    console.log(x, checked);
    setX(checked);
  };

  useEffect(() => {
    
    var element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  });



  return (
    <div className="messages">

        <div className="spacer">&nspb;</div>

        <div className="bubble-top-right">
            <img src={BubbleIcon03}/>
        </div>
        
        <div className="messages-inner">
            <div className="inbox-column">

            <div className="search-bar__outer">
                <div className="search-bar__container">
                    <input 
                        className="search-input"
                        type="text"
                        placeholder="Search messages with buyers"
                    />
                    <SearchIcon className="search-icon"/>
                </div>
            </div>

                <div>
                    <h3>Inbox</h3>
                    <div className="inbox-message-bar">
                        <label className="switch inbox-switch">
                            <input id='how-it-works__checkbox' type="checkbox" checked={x} onChange={soldCheckbox}/>
                            <span className="slider inbox-slider">
                                <div className="inbox-slider-title"> With Sellers</div>
                                <div className="inbox-slider-title"> With Buyers</div>
                            </span>
                        </label>
                    </div>
                    <hr className="message-slider-hr"/>
                </div>
                {/* <img src={NoMessages} className="no-messages"/> */}
                <div className="inbox-previews">
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="profile-banner__container none">
                        <div className="profile-icon-medium">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__username">@megan</div>
                            <div className="profile-banner__message">Hi! Yes I still have this book. It’s in great condition and I’m open to meeting as soon as...</div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>

            <div className="messages-column">
                <div className="recipient__container">
                    <div className="recipient-label">To:</div>
                    <div className="recipient-name"> @username060</div>
                </div>
                    <div className="messages-container" id="messages">
                        <div className="message-bubble__received">
                            <div className="message-bubble">My offer is: $35.00</div>
                            <div className="pointer"></div>
                        </div>

                        <div className="message-bubble__sent">
                            <div className="message-bubble">Hi Megan, I have accepted your offer. Please let me know when you are willing to meet up so I can deliver the book.</div>
                            <div className="pointer"></div>
                        </div>
                        
                    </div>


                    <div className="message-input__container">
                        <AddIcon className="icon-inverted icon-small"/>
                        <div className="message-input">
                            <input 
                                type="text"
                                placeholder="Type your message here"/>
                            <SendIcon/>
                        </div>
                    </div>
            </div>

            <div className="details-column">
                <div className="details-section-inner">
                    <div className="details-title">Listing Details:</div>

                    <div className="quick-view details-quick-view">

                        <div className="image-container quick-view__img">
                            <img className="contain-img" src={TextbookImage}/>
                        </div>

                        <div className="quick-view__content-wrapper">
                            <div className="">
                                <div className="book-title">Algorithms to Live By</div>
                                <div className="book-subtitle">The Computer Science of Human Decisions</div>
                            </div>
                            <div className="listing-details-spacing">
                                <div className="book-edition">1st Edition</div>
                                <div className="book-author">Authors: Brian Christian, Tom Griffiths</div>
                                <div className="book-isbn">ISBN: 2983520357035</div>
                            </div>
                            <div className="book-condition" style={{width: "100%"}}>“Book is in good condition, used once. Great for any cognitive psychology classes.”</div>
                            <div className="popup-last-element side-by-side">
                                <div className="book-title">$50.00</div>
                                <div className="location-marker">location</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="details-section-inner">
                    <div className="details-title">Seller Details:</div>

                    <div className="seller-details__container">
                        <div className="profile-banner__container none">
                            <div className="profile-icon-large">&nbsp;</div>
                            <div>
                                <a href="/profile/0" className="profile-banner__name none">Megan '22</a>
                                <div className="profile-banner__username">@megan</div>
                                <div className="profile-banner__school">University of Floria</div>
                                <div className="profile-banner__major mini">Major: Psychology</div>
                            </div>
                        </div>
                        <div className="seller-rating">
                            <div className="mini">Seller Rating:</div>
                            <div className="mini">
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>

        <div className="footer messages-footer">&nbsp;</div>
    </div>
  );
}

export default Messages;
