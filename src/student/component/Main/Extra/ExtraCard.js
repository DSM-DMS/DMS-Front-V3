import React from 'react';
import { Link } from 'react-router-dom';

import './ExtraCard.scss'

const ExtraCard = ({type, src, title}) => {
    return (
        <Link className="extra--card--wrapper" to={'/extra/' + type}>
           <div className="extra--card--img--wrapper">
                <div className="extra--card--img--cover"></div>
                <img src={src} alt="" className="extra--card--img"/>
           </div> 
           <span className="extra--card--title">{title}</span>
        </Link>
    );
};

export default ExtraCard;