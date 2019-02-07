import React from 'react';

import { Link } from 'react-router-dom';

import './ApplyCard.scss';

const ApplyCard = ({ cardData, cardHoverOn, cardHoverOff }) => {
  return (
    <div
      className="main--apply--card--wrapper"
      onMouseEnter={() => cardHoverOn(cardData.kind)}
      onMouseLeave={cardHoverOff}
    >
      <img
        src={cardData.illust}
        alt="illust"
        className={`main--apply--card--illust ${cardData.kind}--illust`}
      />
      <span className={`main--apply--card--icon ${cardData.kind}--icon`} />
      <div className="main--apply--card--title--wrapper">
        <span className="main--apply--card--title">{cardData.title}</span>
        <p className="main--apply--card--title--explain">
          {cardData.subTitle.split('\n').map(line => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <Link to={`/apply/${cardData.kind}`} className="main--apply--card--link">
        신청하기
      </Link>
    </div>
  );
};

export default ApplyCard;
