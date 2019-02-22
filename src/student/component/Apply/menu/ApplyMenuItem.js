import React from 'react';

import './ApplyMenuItem.scss';

const ApplyMenuItem = ({content, isSelected}) => {
  return <div className={`apply--menu--item ${isSelected}`}><p>{content}</p></div>;
};

export default ApplyMenuItem;
