import '../pages/style.css';
import '../App.css';

import LogoIcon from '../assets/bookmarkd_logo_03.svg';

import FacebookIcon from '../assets/facebook-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import LinkedInIcon from '../assets/linkedin-icon.svg';


function Footer() {
  return (
    <div className="footer">
        <h2 className="footer-logo">Book<span style={{color: '#0FC662'}}>Mark'd</span></h2>
        <div className="footer-inner-container">
            <div className="footer-links__container">
                <h5>ABOUT</h5>
                <div>Our Team</div>
                <div>Partnerships</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
            </div>
            <div className="footer-links__container">
                <h5>COMMUNITY</h5>
                <div>Events</div>
                <div>Blog</div>
                <div>Forum</div>
                <div>Invite a Friend</div>
            </div>
            <div className="footer-links__container">
                <h5>CONTACT</h5>
                <div>Careers</div>
                <div>FAQ</div>
            </div>
            <div className="footer-icons__container">
                <img className="navbar-logo" src={FacebookIcon}/>
                <br/>
                <img className="navbar-logo" src={InstagramIcon}/>
                <br/>
                <img className="navbar-logo" src={LinkedInIcon}/>
            </div>
        </div>

    </div>
  );
}

export default Footer;
