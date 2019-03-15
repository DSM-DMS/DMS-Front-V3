import React from 'react';

import './MusicContent.scss';
import musicIcon from '../../../../../assets/icon/ic_apply_music.png';
import MusicListContent from './MusicListContent';

const MusicContent = ({
  musicApplication,
  onChangeMusicApplication,
  musicInfo,
  isOnApply,
}) => {
  if (isOnApply) {
    return (
      <div className="apply--content--music">
        <img className="apply--content--music--icon" src={musicIcon} alt="" />
        <h1 className="apply--content--music--title">기상 음악 신청하기</h1>
        <p className="apply--content--music--music_title">노래 제목</p>
        <input
          className="apply--content--music--input"
          name="title"
          value={musicApplication.title}
          onChange={onChangeMusicApplication}
          autocomplete="off"
        />
        <p className="apply--content--music--artist">아티스트</p>
        <input
          className="apply--content--music--input"
          name="singer"
          value={musicApplication.singer}
          onChange={onChangeMusicApplication}
          autocomplete="off"
        />
      </div>
    );
  }
  return <MusicListContent musicInfo={musicInfo} />;
};

export default MusicContent;
