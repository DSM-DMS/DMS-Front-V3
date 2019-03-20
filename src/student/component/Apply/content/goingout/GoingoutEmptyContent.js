import React from 'react';

import './GoingoutEmptyContent.scss';
import ic from '../../../../../assets/icon/ic_apply_goinout.png';

const GoingoutEmptyContent = () => {
  return (
    <div className='apply--content--empty--goingout'>
      <div className='apply--inner--content--empty--goingout'>
        <img src={ic} alt='goingout empty content icon'/>
        <h2>외출신청하기</h2>
        <p>아직 외출 신청을 하지 않았어요!</p>
        <p>왼쪽에 + 버튼을 눌러서 외출 신청을 하세요!</p>
      </div>
    </div>
  );
};

export default GoingoutEmptyContent;
