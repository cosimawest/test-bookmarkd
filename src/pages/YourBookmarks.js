import React, { useState } from 'react';

import '../pages/style.css';
import '../App.css';

import Footer from '../components/Footer.js';
import NavBar from '../components/NavBarTwo.js';
import BookCard from '../components/BookCard.js';

import BackArrow from '../assets/back-arrow.svg';
import BubbleIcon03 from '../assets/bubble-icon-03.svg';
import TextbookImage from '../assets/test-textbook-image.png';
import EmptyState from '../assets/bookmarks-empty-state.svg';



function YourBookmarks() {
  const [textbookSelected, setTextbookSelected] = useState(false);
  const empty = false; // temp variable to switch between empty and non-empty states of this page

  return (
    <div className="profile">

      <div className="profile-inner">
          <div className="spacer"></div>

          <div className="bubble-top-right">
              <img src={BubbleIcon03}/>
          </div>

          <div className="my-dashboard__inner inner">
            <div className="inline">
                <a href="/dashboard"><img src={BackArrow} className="backarrow"/></a>
                <h2 class="dropshadow">My Dashboard</h2>
            </div>

            <div className="side-by-side dashboard-secondary-title">
                <h3>Your Bookmarks</h3>

                <div>Search Bar</div>
            </div>         
          </div>
      </div>

      
      <div className="my-dashboard__second-inner">
        {!empty ? 
          <div className="my-dashboard__inner inner">
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
          : 
            <div className="empty-state-div">
                <div className="empty-state-title">No bookmarks yet</div>
                <img src={EmptyState}/>
                <div>Explore the selection</div>
                <button className="btn-mini">Check out the marketplace</button>
            </div>
            }
          <Footer/>
      </div>
      
      
    </div>
  );
}

export default YourBookmarks;
