import React from 'react';

import './MyPageCard.scss';

const MyPageCard = ({ kind, title, setModal }) => {
  return (
    <div
      className="mypage--card--wrapper"
      onClick={
        kind === 'score' || kind === 'changepassword'
          ? () => setModal(title)
          : null
      }
    >
      <span className={`mypage--card--img mypage--card--img--${kind}`} />
      <span className="mypage--card--title">{title}</span>
    </div>
  );
};

export default MyPageCard;
