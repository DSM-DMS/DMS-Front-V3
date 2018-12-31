import React from 'react';

import './NoticeCard.scss'

const NoticeCard = ({title, subtitle, src}) => {
    return (
        <div className="notice--card--wrapper">
            <div className="notice--card--cover"></div>
            <img src={src} alt="" className="notice--card--img"/>
            <span className="notice--card--title">{title}</span>
            <span className="notice--card--title--sub   ">{subtitle}</span>
        </div>
    );
};

export default NoticeCard;