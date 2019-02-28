import React from 'react';

import './MusicContent.scss';
import musicIcon from '../../../../../assets/icon/ic_apply_music.png';

const MusicContent = ({ musicApplication, onChangeMusicApplication }) => {
  return (
    <div className='apply--content--music'>
      <img className='apply--content--music--icon' src={musicIcon} />
      <h1 className='apply--content--music--title'>기상 음악 신청하기</h1>
      <p className='apply--content--music--music_title'>노래 제목</p>
      <input
        className='apply--content--music--input'
        name='title'
        value={musicApplication.title}
        onChange={onChangeMusicApplication}
      />
      <p className='apply--content--music--artist'>아티스트</p>
      <input
        className='apply--content--music--input'
        name='singer'
        value={musicApplication.singer}
        onChange={onChangeMusicApplication}
      />
    </div>
  );
};

export default MusicContent;
