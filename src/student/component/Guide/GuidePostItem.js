import React from 'react';

import './GuidePostItem.scss';

const GuidePostItem = ({ title, postDate }) => {
  return (
    <li className='guide--post--item'>
      <span className='guide--post--item--title'>{title}</span>
      <span className='guide--post--item--postDate'>{postDate}</span>
    </li>
  );
};

export default GuidePostItem;
