import React from 'react';
import { Link } from 'react-router-dom';
import './ApplyMenuBtn.scss';

const ApplyMenuBtn = ({ iconSrc, title, baseUrl, url, selectedClass }) => {
  return (
    <div className={`unselectable apply--detail--btn ${selectedClass}`}>
      <img className='apply--detail--btn--icon' src={iconSrc} alt='icon' />
      <Link className='apply--detail--btn--title' to={`/${baseUrl}/${url}`}>
        {title}
      </Link>
    </div>
  );
};

export default ApplyMenuBtn;
