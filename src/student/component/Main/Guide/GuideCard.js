import React from 'react';

import { Link } from 'react-router-dom';

import './GuideCard.scss';

const GuideCard = ({ type, title, subtitle, src }) => {
  return (
    <Link className="guide--card--wrapper" to={`/guide/${type}`}>
      <div className="guide--card--cover" />
      <img
        src={src}
        alt=""
        className={`guide--card--img guide--card--img--${type}`}
      />
      <span className="guide--card--title">{title}</span>
      <span className="guide--card--title--sub   ">{subtitle}</span>
    </Link>
  );
};

export default GuideCard;
