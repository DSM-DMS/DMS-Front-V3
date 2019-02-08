import React, { Component } from 'react';

import './MusicSubmitCard.scss';

import OutsideClickHandler from 'react-outside-click-handler';
import exitIcon from '../../../../../assets/icon/ic_exit.png';
import dmsLogo from '../../../../../assets/logo/logo.png';

export default class MusicSubmitCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: ''
    };
  }

  onChangeTitle = evt => {
    this.setState({
      title: evt.target.value
    });
  };

  onChangeArtist = evt => {
    this.setState({
      artist: evt.target.value
    });
  };

  render() {
    const { onSubmitMusic, onExit } = this.props;
    const { title, artist } = this.state;
    return (
      <OutsideClickHandler onOutsideClick={onExit}>
        <div className='apply--music--submit--card'>
          <img
            className='apply--music--submit--card--exit'
            src={exitIcon}
            alt='exitIcon'
            onClick={onExit}
          />
          <img
            className='apply--music--submit--card--logo'
            src={dmsLogo}
            alt='dmsLogo'
          />
          <p className='apply--music--submit--card--title'>기상음악신청</p>
          <input
            className='apply--music--submit--card--input--title'
            placeholder='음악 제목'
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <input
            className='apply--music--submit--card--input--artist'
            placeholder='아티스트'
            value={this.state.artist}
            onChange={this.onChangeArtist}
          />
          <button
            className='apply--music--submit--card--btn'
            onClick={() => onSubmitMusic(title, artist)}
          >
            제출
          </button>
        </div>
      </OutsideClickHandler>
    );
  }
}
