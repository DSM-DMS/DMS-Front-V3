import React from 'react';

import './MusicListContent.scss';

const dayConveter = day => {
  switch (day) {
    case 'mon':
      return '월요일';
    case 'tue':
      return '화요일';
    case 'wed':
      return '수요일';
    case 'thu':
      return '목요일';
    case 'fri':
      return '금요일';
    default:
  }
};

const MusicContent = ({ musicInfo }) => {
  const musicContent = [];
  for (let day in musicInfo) {
    const musicList = musicInfo[day].map(music => {
      return (
        <div className='apply--content--music--list--body' key={music.id}>
          <div className='apply--content--music--list--day'>
            {dayConveter(day)}
          </div>
          <div className='apply--content--music--list--title'>
            {music.singer}
          </div>
          <div className='apply--content--music--list--author'>
            {music.studentName}
          </div>
        </div>
      );
    });
    musicContent.push(musicList);
  }
  return (
    <div className='apply--content--music--list'>
      <div className='apply--content--music--list--header'>
        <div className='apply--content--music--list--day'>요일</div>
        <div className='apply--content--music--list--title'>노래 제목</div>
        <div className='apply--content--music--list--author'>작성자</div>
      </div>
      {musicContent}
    </div>
  );
};

export default MusicContent;
