import React from 'react';
import HeaderContainer from '../../common/header/HeaderContainer';

import grassIllust from '../../../assets/illust/grass_illust.png';
import leftIllust from '../../../assets/illust/mypage-left-illust.png';
import rightIllust from '../../../assets/illust/mypage-right-illust.png';

import './MyPage.scss';

const MyPage = ({
  grade,
  classroom,
  number,
  name,
  goodPoint,
  badPoint,
  advice,
  myPageCardList,
}) => {
  return (
    <div className="mypage--wrapper">
      <img src={grassIllust} alt="" className="mypage--illust--grass" />
      <img src={leftIllust} alt="" className="mypage--illust--left" />
      <img src={rightIllust} alt="" className="mypage--illust--right" />
      <div className="inner--wrapper">
        <HeaderContainer />
        <div className="mypage--content--wrapper">
          <div className="mypage--content--inner--wrapper">
            <div className="mypage--state--wrapper">
              <span className="mypage--state--person">{`${grade}학년 ${classroom}반 ${number}번 ${name}`}</span>
              <span className="mypage--state--point">{`상점 : ${goodPoint}  벌점 : ${badPoint}`}</span>
              <span className="mypage--state--title">{advice}</span>
            </div>
            <div className="mypage--link--wrapper">{myPageCardList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
