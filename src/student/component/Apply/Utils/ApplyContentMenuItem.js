import React from 'react';

import './ApplyContentMenuItem.scss';

const ApplyContentMenuItem = ({ content, isSelected, val, onClickMenu }) => {
  let isLongWord;
  if (content.content.length > 1) isLongWord = 'long';
  return (
    <div
      className={`apply--content--menu--item ${isSelected}`}
      onClick={() => onClickMenu(val)}
    >
      <span className={`apply--content--menu--item--content ${isLongWord}`}>
        {content.content}
      </span>
      <span className='apply--content--menu--item--detail'>
        {content.detail}
      </span>
    </div>
  );
};

export default ApplyContentMenuItem;
