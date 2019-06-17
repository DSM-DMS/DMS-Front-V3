import React, { Component } from 'react';

import './MusicApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import { submitMusic, deleteMusic } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

export default class MusicApplyContainer extends Component {
  menuList = [
    { date: '월요일', val: 'mon' },
    { date: '화요일', val: 'tue' },
    { date: '수요일', val: 'wed' },
    { date: '목요일', val: 'thu' },
    { date: '금요일', val: 'fri' },
  ];

  state = {
    refreshFlag: false,
  };

  onCancel = ({ myMusicId }) => {
    deleteMusic(getCookie('JWT'), myMusicId, getCookie('RFT'))
      .then(response => {
        switch (response.status) {
          case 200:
            alert('기상음악 신청 취소가 완료되었습니다.');
            this.setState({
              refreshFlag: true,
            });
            break;
          case 204:
            alert('없는 기상음악 입니다.');
            break;
          default:
        }
      })
      .catch(e => {
        switch (e.response.status) {
          case 403:
            alert('기상음악 신청 취소 권한이 없습니다.');
            break;
          default:
        }
      });
  };

  onApply = ({ day, singer, title }) => {
    if (singer === '' || title === '') {
      alert('노래 제목 혹은 아티스트를 입력하지 않으셨습니다.');
      return;
    }
    submitMusic(getCookie('JWT'), day, singer, title, getCookie('RFT'))
      .then(response => {
        switch (response.status) {
          case 201:
            alert('기상음악 신청이 완료되었습니다.');
            this.setState({
              refreshFlag: true,
            });
            break;
          case 202:
            alert('이미 기상음악 신청을 하셨습니다.');
            break;
          case 205:
            alert('기상음악 신청이 이미 마감되었습니다.');
            break;
          default:
        }
      })
      .catch(e => {
        alert('기상음악 신청 실패');
      });
  };

  afterRefresh = () => {
    this.setState({
      refreshFlag: false,
    });
  };

  render() {
    return (
      <ApplyContentContainer
        type="music"
        menuList={this.menuList}
        onCancel={this.onCancel}
        onApply={this.onApply}
        refreshFlag={this.state.refreshFlag}
        afterRefresh={this.afterRefresh}
      />
    );
  }
}
