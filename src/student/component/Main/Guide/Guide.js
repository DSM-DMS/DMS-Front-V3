import React from 'react';

import guideLeftBackground from '../../../../assets/illust/left_illustration.png';
import guideRightBackground from '../../../../assets/illust/right_illustration.png';

import './Guide.scss';

const Guide = ({ cardList }) => {
  return (
    <div className="guide--wrapper" id="guide">
      <img
        src={guideLeftBackground}
        alt=""
        className="guide--background--left"
      />
      <img
        src={guideRightBackground}
        alt=""
        className="guide--background--right"
      />
      <div className="inner--wrapper">
        <div className="guide--title--wrapper">
          <span className="guide--title">DMS 기숙사 안내사항</span>
          <span className="guide--title--sub">
            대덕소프트웨어마이스터고등학교 사감부에서 작성한 안내사항을
            열람하세요.
          </span>
        </div>

        <div className="guide--card--list">{cardList}</div>
      </div>
    </div>
  );
};

export default Guide;
