import React from 'react';

import './ApplyAddCard.scss';
import applyAddImg from '../../../../../assets/icon/ic_apply_add.png';

const ApplyAddCard = ({onClickAdd}) => {
  return (
    <div className='apply--add--card' onClick={onClickAdd}>
      <img
        className='apply--add--card--img'
        src={applyAddImg}
        alt='추가 아이콘'
      />
      <p className='apply--add--card--text'>눌러서 신청</p>
    </div>
  );
};

export default ApplyAddCard;
