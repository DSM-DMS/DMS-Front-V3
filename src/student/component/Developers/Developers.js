import React from 'react';

import HeaderContainer from '../../common/header/HeaderContainer';
import devLogo from '../../../assets/logo/devLogo.png';

import './Developers.scss';

const Developers = () => {
  return (
    <div className="developers--wrapper">
      <div className="inner--wrapper">
        <HeaderContainer developers={true} />
      </div>
      <div className="developers--introduce--wrapper">
        <div className="developers--introduce--inner--wrapper">
          <span className="developers--introduce--title">Team. DMS 소개</span>
          <p className="developers--introduce--title--sub">
            학생들로만 이루어진 DMS는 학생들의 편한 기숙사 생활을 위해서
            기숙사의 기능을 개발하고 유지 보수 중에 있습니다.
          </p>
          <img src={devLogo} className="developers--introduce--logo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Developers;
