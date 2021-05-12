import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import NavBar from '../components/NavBarTwo.js';
import BookCard from '../components/BookCard.js';
import Dropdown from '../components/Dropdown.js';
import Popup from '../components/Popup.js';
import Footer from '../components/Footer.js';


import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BackpackIcon from '../assets/backpack-icon.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import TextbookImage from '../assets/test-textbook-image.png';


function Marketplace() {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const [marked, setMarked] = useState(false);


  return (
    <div className="marketplace">

        {textbookSelected && (
            <Popup
                isOpen={textbookSelected}
                setIsOpen={setTextbookSelected}
            >
                <div className="quick-view">
                { marked ? <BookmarkIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> : <BookmarkBorderIcon className="bookmark-icon" onClick={() => setMarked(!marked)}/> }

                    <div className="image-container quick-view__img">
                        <img className="contain-img" src={TextbookImage}/>
                    </div>

                    <div className="quick-view__content-wrapper">
                        <div className="location-marker">location</div>
                        <div className="">
                            <div className="book-title">Algorithms to Live By</div>
                            <div className="book-subtitle">The Computer Science of Human Decisions</div>
                        </div>
                        <div className="">
                            <div className="book-edition">1st Edition</div>
                            <div className="book-author">Authors: Brian Christian, Tom Griffiths</div>
                            <div className="book-isbn">ISBN: 2983520357035</div>
                        </div>
                        <div className="side-by-side">
                            <div className="book-condition">“Book is in good condition, used once. Great for any cognitive psychology classes.”</div>
                            <a className="message-seller__link" href="/messages">Message Seller</a>
                        </div>
                        <div className="popup-last-element side-by-side">
                            <div className="book-title">$50.00</div>
                            <div>
                                <button className="mini-btn-medium add-to-btn">
                                    <div className="side-by-side">
                                        <div className="add-to-btn-text">Add To</div>
                                        <img src={BackpackIcon}/>
                                    </div>
                                </button>
                                <a className="log-in-button">Make an Offer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        )}

        <NavBar/>

        <div className="spacer">&nspb;</div>
        <div className="marketplace-title">
            <h2 className="dropshadow">Marketplace</h2>
        </div>

        <div className="marketplace__inner inner">
            <div className="search-bar__container-outer">
                <div className="search-bar__container">
                    <input 
                        className="search-input"
                        type="text"
                        placeholder="Search by ISBN, Book Title, Author, Class"
                    />
                    <SearchIcon className="search-icon"/>
                </div>
            </div>

            <div className="sort-and-filter__container">

                <Dropdown title={<div style={{display: "flex"}}>Filter By <ExpandMoreIcon/></div>}>
                    <div className="drop-down__container">
                        <div className="filter-item">
                            <input id="price" name="price" type="checkbox"/>
                            <label for="price">Price Negotiable</label>
                        </div>
                        
                        <div className="filter-item">
                            <input id="new" name="new" type="checkbox"/>
                            <label className="filter-item__new" for="new">New</label>
                            
                            <input id="used" name="used" type="checkbox"/>
                            <label for="used">Used</label>
                        </div>

                        <div className="filter-item seller-rating">
                            Seller Rating: 
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                            <StarBorderIcon/>
                        </div>

                        <div className="filter-item">
                            <input name="price" type="checkbox"/>
                            <label for="price">Distance</label>
                        </div>
                    </div>
                </Dropdown>

                <Dropdown title={<div style={{display: "flex"}}>Sort By <ExpandMoreIcon/></div>}>
                    <div className="drop-down__container">
                        <div>Relevance</div>
                        <div>Price Low to High</div>
                        <div>Price High to Low</div>
                        <div>Ratings High to Low</div>
                    </div>
                </Dropdown>
            </div>

            <div className="book-card__container">
                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />

                <BookCard
                    image={TextbookImage}
                    title={"Structures or Why Things Don't Fall Down"}
                    author={"Brian Christan"}
                    price={"$50"}
                    textbookSelected={textbookSelected}
                    setTextbookSelected={setTextbookSelected}
                />
            </div>

        </div>
        <Footer/>
    </div>
  );
}

export default Marketplace;
