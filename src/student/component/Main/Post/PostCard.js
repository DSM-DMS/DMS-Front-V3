import React from 'react';

import { Link } from "react-router-dom";

import './PostCard.scss'

const PostCard = ({type, title, subtitle, src}) => {
    return (
        <Link className="post--card--wrapper" to={`/post/${type}`}>
            <div className="post--card--cover"></div>
            <img src={src} alt="" className={`post--card--img post--card--img--${type}`}/>
            <span className="post--card--title">{title}</span>
            <span className="post--card--title--sub   ">{subtitle}</span>
        </Link>
    );
};

export default PostCard;