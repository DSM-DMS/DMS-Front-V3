import React from 'react';

import './ApplyBackImg.scss';

const ApplyBackImg = ({ kind, src, hovered }) => {
  return (
    <img
      src={src}
      alt=""
      className={`main--apply--background--img ${
        hovered === kind ? 'main--apply--background--act' : ''
      }`}
    />
  );
};

export default ApplyBackImg;
