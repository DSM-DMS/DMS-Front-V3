import React, { Component } from 'react'

import './AppliedMusicCard.scss'

const AppliedMusicCard = ({title, singer, author}) => {
    return (
        <div className = 'apply--music--card'>
            <p className = 'apply--music--card--title'>{title}</p>
            <p className = 'apply--music--card--singer'>{singer}</p>
            <p className = 'apply--music--card--author'>{author}</p>
        </div>
    );
}

export default AppliedMusicCard;