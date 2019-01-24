import React from 'react';

import exitImg from '../../../assets/icon/ic_exit.png';

import './Point.scss';

const Point = ({ setModal, historyCards }) => {
  return (
    <div className="point--wrapper">
      <img
        src={exitImg}
        alt="exit"
        className="point--exit--icon"
        onClick={() => setModal('')}
      />
      <div className="point--content--wrapper">{historyCards}</div>
    </div>
  );
};

export default Point;
