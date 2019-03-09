import React from 'react';

import './ApplyTypeSwitchItem.scss';

const ApplyTypeSwitchItem = ({ content, onSelectType, val, selectedClass }) => {
  return (
    <li
      className={`apply--content--type--switch--item ${selectedClass}`}
      onClick={() => {
        onSelectType(val);
      }}
    >
      {content}
    </li>
  );
};

export default ApplyTypeSwitchItem;
