import React from 'react';

import './DevelopersCard.scss';

const DevelopersCard = ({ src, name, job }) => {
  return (
    <div className="developers--card--wrapper">
      <img src={src} alt="" className="developers--card--img" />
      <div className="developers--card--description--wrapper">
        <p className="developers--card--description--name">{name}</p>
        <p className="developers--card--description--job">{job}</p>
      </div>
    </div>
  );
};

export default DevelopersCard;
