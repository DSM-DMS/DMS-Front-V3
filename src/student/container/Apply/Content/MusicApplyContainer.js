import React, { Component } from 'react';

import './MusicApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import { submitMusic } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

export default class MusicApplyContainer extends Component {
  menuList = [
    { date: '월요일', val: 'mon' },
    { date: '화요일', val: 'tue' },
    { date: '수요일', val: 'wed' },
    { date: '목요일', val: 'thu' },
    { date: '금요일', val: 'fri' }
  ];

  onCancel = () => {};

  onApply = ({day, singer, title}) => {
    submitMusic(getCookie('JWT'), day+1, singer, title)
  };

  render() {
    return (
      <ApplyContentContainer
        type='music'
        menuList={this.menuList}
        onCancel={this.onCancel}
        onApply={this.onApply}
      />
    );
  }
}
