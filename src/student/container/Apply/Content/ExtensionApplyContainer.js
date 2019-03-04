import React, { Component } from 'react';

import './ExtensionApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import { deleteExtension, applyExtension } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

export default class ExtensionApplyContainer extends Component {
  menuList = [
    '가온실',
    '나온실',
    '다온실',
    '라온실',
    '2층 여자 독서실',
    '3층 계단측 독서실',
    '3층 학교측 독서실',
    '4층 계단측 독서실',
    '4층 학교측 독서실',
    '5층 열린 교실'
  ];
  typeList = [{ content: '11시', val: '11' }, { content: '12시', val: '12' }];

  onCancel = time => {
    console.log(time);
    deleteExtension(getCookie('JWT'), time)
      .then(response => {
        console.log(response);
        switch (response.status) {
          case 200:
            alert('연장신청 취소 성공!');
            break;
          default:
        }
      })
      .catch(error => {
        switch (error.response.status) {
          case 403:
            alert('권한 없음');
            break;
          case 409:
            alert('연장신청 취소 실패!');
            break;
          default:
        }
      });
  };

  onApply = param => {
    console.log(param);
    applyExtension(getCookie('JWT'), param);
  };

  render() {
    return (
      <ApplyContentContainer
        type='extension'
        menuList={this.menuList}
        typeList={this.typeList}
        onCancel={this.onCancel}
        onApply={this.onApply}
      />
    );
  }
}
