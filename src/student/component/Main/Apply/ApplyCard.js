import React from 'react';

import { Link } from "react-router-dom";

import './ApplyCard.scss';

const ApplyCard = ({cardData, cardHoverOn, cardHoverOff}) => {
    return (
        <div className="apply--card--wrapper" onMouseEnter={() => cardHoverOn(cardData.kind)}onMouseLeave={cardHoverOff}>
            <img src={cardData.illust} alt="illust" className={"apply--card--illust " + cardData.kind + '--illust'}/>
            <span className={"apply--card--icon " + cardData.kind+'--icon'}></span>
            <div className="apply--card--title--wrapper">
                <span className="apply--card--title">{cardData.title}</span>
                <p className="apply--card--title--explain">{cardData.subTitle.split('\n').map(line => <span key={line}>{line}<br/></span>)}</p>
            </div>
            <Link to={'/apply/'+cardData.kind} className="apply--card--link">신청하기</Link>
        </div>
    );
};

export default ApplyCard;