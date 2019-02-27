import React from 'react';

import './StayContent.scss';

import icon1 from '../../../../../assets/icon/ic_apply_stay_1.png';
import icon2 from '../../../../../assets/icon/ic_apply_stay_2.png';
import icon3 from '../../../../../assets/icon/ic_apply_stay_3.png';
import icon4 from '../../../../../assets/icon/ic_apply_stay_4.png';

const content = [
  {
    imgSrc: icon1,
    title: '금요귀가',
    content:
      '금요귀가를 신청하신 경우 금요일 일과 종료 후 오후 8시 30분 이후 귀가하여 일요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 금요귀가를 신청하시겠습니까?'
  },
  {
    imgSrc: icon2,
    title: '토요귀가',
    content:
      '토요귀가를 신청하신 경우 토요일 오후 9시 이전에 귀가하여 일요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 토요귀가를 신청하시겠습니까?'
  },
  {
    imgSrc: icon3,
    title: '토요귀사',
    content:
      '토요귀사를 신청하신 경우 금요일 일과 종료 후 오후 8시 30분 이후 귀가하여 토요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 토요귀사를 신청하시겠습니까?'
  },
  {
    imgSrc: icon4,
    title: '잔류',
    content:
      '잔류를 신청하신 경우 주말동안 기숙사에 남게 됩니다. 잔류를 신청하시겠습니까?'
  }
];

const StayContent = ({ selectedMenu }) => {
  return (
    <div className='apply--content--stay'>
      <img
        className='apply--content--stay--icon'
        alt='icon'
        src={content[selectedMenu].imgSrc}
      />
      <h1 className='apply--content--stay--title'>
        {content[selectedMenu].title}
      </h1>
      <p className='apply--content--stay--content'>
        {content[selectedMenu].content}
      </p>
    </div>
  );
};

export default StayContent;
