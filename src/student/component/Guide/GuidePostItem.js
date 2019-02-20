import React from 'react';

import './GuidePostItem.scss';

const GuidePostItem = ({ title, postDate, id, setDetailPost }) => {
  return (
    <li className='guide--post--item' onClick={() => setDetailPost(id)}>
      <span className='guide--post--item--title'>{title}</span>
      <span className='guide--post--item--postDate'>{postDate}</span>
    </li>
  );
};

export default GuidePostItem;
