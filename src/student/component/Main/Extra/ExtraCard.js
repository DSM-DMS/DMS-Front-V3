import React from 'react';

import './ExtraCard.scss';

const ExtraCard = ({ type, src, title, linkToSurvey, onClickModal }) => {
  return (
    <div
      className="extra--card--wrapper"
      onClick={
        type === 'survey'
          ? //() => linkToSurvey(`/extra/${type}`)
            () => alert('설문 조사는 추후에 추가될 예정입니다.')
          : e => {
              onClickModal(e, title);
            }
      }
    >
      <div className="extra--card--img--wrapper">
        <div className="extra--card--img--cover" />
        <img src={src} alt="" className="extra--card--img" />
      </div>
      <span className="extra--card--title">{title}</span>
    </div>
  );
};

export default ExtraCard;
