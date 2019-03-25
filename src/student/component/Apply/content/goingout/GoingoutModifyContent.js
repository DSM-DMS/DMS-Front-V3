import React from 'react';

import './GoingoutModifyContent.scss';

const GoingoutModifyContent = ({
  onChangeGoingoutApplication,
  modifyGoingoutApplication
}) => {
  return (
    <div className='apply--content--goingout'>
      <p>외출 날짜</p>
      <div className='apply--content--goingout--input--wrapper'>
        <input
          name='month'
          value={modifyGoingoutApplication.month}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>월</span>
        <input
          name='day'
          value={modifyGoingoutApplication.day}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>일</span>
      </div>
      <p>외출 시각</p>
      <div className='apply--content--goingout--input--wrapper'>
        <input
          name='outHour'
          value={modifyGoingoutApplication.outHour}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>시</span>
        <input
          name='outMin'
          value={modifyGoingoutApplication.outMin}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>분</span>
        <span> ~ </span>
        <input
          name='returnHour'
          value={modifyGoingoutApplication.returnHour}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>시</span>
        <input
          name='returnMin'
          value={modifyGoingoutApplication.returnMin}
          onChange={onChangeGoingoutApplication}
          className='apply--content--goingout--input'
          autocomplete='off'
        />
        <span>분</span>
      </div>
      <p>외출 사유</p>
      <textarea
        name='reason'
        value={modifyGoingoutApplication.reason}
        onChange={onChangeGoingoutApplication}
        autocomplete='off'
      />
    </div>
  );
};

export default GoingoutModifyContent;
