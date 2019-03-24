import React from 'react';

import './GoingoutContent.scss';

const GoingoutContent = ({
  onChangeGoingoutApplication,
  goingoutApplication
}) => {
  return (
    <div className='apply--content--goingout'>
      <p>외출 날짜</p>
      <div className='apply--content--goingout--input--wrapper'>
        <input
          name='month'
          value={goingoutApplication.month}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>월</span>
        <input
          name='day'
          value={goingoutApplication.day}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>일</span>
      </div>
      <p>외출 시각</p>
      <div className='apply--content--goingout--input--wrapper'>
        <input
          name='outHour'
          value={goingoutApplication.outHour}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>시</span>
        <input
          name='outMin'
          value={goingoutApplication.outMin}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>분</span>
        <span> ~ </span>
        <input
          name='returnHour'
          value={goingoutApplication.returnHour}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>시</span>
        <input
          name='returnMin'
          value={goingoutApplication.returnMin}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autoComplete='off'
        />
        <span>분</span>
      </div>
      <p>외출 사유</p>
      <textarea
        name='reason'
        value={goingoutApplication.reason}
        onChange={onChangeGoingoutApplication}
        autoComplete='off'
      />
    </div>
  );
};

export default GoingoutContent;
