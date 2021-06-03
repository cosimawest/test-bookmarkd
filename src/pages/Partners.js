import '../pages/style.css';
import '../App.css';

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import TopBubble from '../assets/bubble-icon-04.svg';
import BottomBubble from '../assets/bubble-icon-05.svg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PlaceholderProfPic from '../assets/profile-picture-placeholder.png';


function Partners() {    
    return (
        <div className="info-page">
            <div className="spacer"></div>
            <img className="bubble-top-left" src={TopBubble}/>

            <div className="inner">
                <h2 className="dropshadow">Our Partners</h2>
                <div className="info-page-subheader">BookMark’d is proud to work together with these other organizations to develop new content, events, and specials just for you! Here’s a little bit more about our partners and what we’ve been working on:</div>

                <div className="partners-card">
                    <img src={PlaceholderProfPic} className="partners-img"/>
                    <div className="partners-text">
                        <h4>Org/company Name</h4>
                        <div>Short Bio about them</div>
                        <div className="partners-description">What we've been working on</div>
                    </div>
                </div>
            </div>

            <img className="bubble-bottom-right" src={BottomBubble}/>
            <Footer/>
        </div>
    );
}

export default Partners;
