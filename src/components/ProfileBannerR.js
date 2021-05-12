import React, { useState, useEffect } from 'react';

import '../pages/style.css';

import StarBorderIcon from '@material-ui/icons/StarBorder';


function ProfileBannerR(props) {
    console.log(props);

  return (
    <div className="profile-top">
        <div className="profile-top__inner inner">
            <div className="user-profile-icon__container">
                <div className="user-profile-icon"></div>
            </div>

            <div className="profile-title">
                <div className="profile-name">{props.profile.name} ‘{props.profile.year}</div>
                <div className="profile-username">@{props.profile.username}</div>
            </div>

            {props.stars}
        </div>
    </div>
  );
}

export default ProfileBannerR;
