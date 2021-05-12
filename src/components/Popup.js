import React, { useState, useLayoutEffect } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import onClickOutside from 'react-onclickoutside';

import StarBorderIcon from '@material-ui/icons/StarBorder';



function useLockBodyScroll() {
    useLayoutEffect(() => {
     // Get original body overflow
     const originalStyle = window.getComputedStyle(document.body).overflow;  
     // Prevent scrolling on mount
     document.body.style.overflow = 'hidden';
     // Re-enable scrolling when component unmounts
     return () => document.body.style.overflow = originalStyle;
     }, []); // Empty array ensures effect is only run on mount and unmount
}

function Popup(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    Popup.handleClickOutside = () => {
        setIsOpen(false);
    }

    // useLockBodyScroll();

    return (
        <div className="darken-bg">
            <div className="popup__container">
                <div className="top-bar" onClick={() => props.setIsOpen(!props.isOpen)}>
                    <div className="profile-banner__container">
                        <div className="profile-icon-mini">&nbsp;</div>
                        <div>
                            <div className="profile-banner__name">Megan '22</div>
                            <div className="profile-banner__star"><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></div>
                            
                        </div>
                    </div>
                    <CloseIcon/>
                    {/* {props.title} */}
                </div> 
                <div>{props.children}</div>
            </div>
        </div>
    )
};

const clickOutsideConfig = {
    handleClickOutside: () => Popup.handleClickOutside,
  };
  
// export default Popup;
export default onClickOutside(Popup, clickOutsideConfig);