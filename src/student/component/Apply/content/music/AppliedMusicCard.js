import React from 'react';

import './AppliedMusicCard.scss';

const AppliedMusicCard = ({
  title,
  singer,
  author,
  id,
  selectedClass,
  onChangeCard,
  applyStudent,
  studentId
}) => {
  return (
    <div
      className={`unselectable apply--music--card ${selectedClass}`}
      onClick={() => {
        if (applyStudent === studentId) {
          onChangeCard(id);
        }
      }}
    >
      <p className='apply--music--card--title'>{title}</p>
      <p className='apply--music--card--singer'>{singer}</p>
      <p className='apply--music--card--author'>{author}</p>
    </div>
  );
};

export default AppliedMusicCard;
