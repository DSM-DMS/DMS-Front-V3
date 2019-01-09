import React from 'react';

import './MyPageCard.scss';

const MyPageCard = ({kind, title}) => {
    return (
        <div className="mypage--card--wrapper">
            <span className={`mypage--card--img mypage--card--img--${kind}`}></span>
            <span className="mypage--card--title">{title}</span>
        </div>
    );
};

export default MyPageCard;