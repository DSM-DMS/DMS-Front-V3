import React from 'react';

import './ApplyAcceptBtn.scss';

const ApplyAcceptBtn = ({ content, btnClass, onClick, params }) => {
  return (
    <div className={`apply--btn ${btnClass}`} onClick={() => onClick(params)}>
      {content}
    </div>
  );
};

export default ApplyAcceptBtn;
