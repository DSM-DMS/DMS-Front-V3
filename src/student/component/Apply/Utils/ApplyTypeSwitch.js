import React from 'react';
import ApplyTypeSwitchItem from './ApplyTypeSwitchItem';

import './ApplyTypeSwitch.scss';

const ApplyTypeSwitch = ({ content, selectedType, onSelectType }) => {
  const items = content.map((item, i) => {
    if (item.val === selectedType)
      return (
        <ApplyTypeSwitchItem
          content={item.content}
          onSelectType={onSelectType}
          val={item.val}
          key={i}
          selectedClass='selected'
        />
      );
    return (
      <ApplyTypeSwitchItem
        content={item.content}
        key={i}
        onSelectType={onSelectType}
        val={item.val}
      />
    );
  });

  return <ul className='apply--type--switch--wrapper'>{items}</ul>;
};

export default ApplyTypeSwitch;
