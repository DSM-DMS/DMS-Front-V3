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
    '5층 열린 교실',
    '3층 소파'
  ];
  typeList = [{ content: '11시', val: '11' }, { content: '12시', val: '12' }];
  state = {
    refreshFlag: false
  };
  onCancel = param => {
    console.log(param);
    deleteExtension(getCookie('JWT'), param.extension)
      .then(response => {
        console.log(response);
        switch (response.status) {
          case 200:
            alert('연장신청 취소 성공!');
            this.setState({
              refreshFlag: true
            });
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

  afterRefresh = () => {
    this.setState({
      refreshFlag: false
    });
  };

  onApply = param => {
    console.log(param);
    applyExtension(getCookie('JWT'), param)
      .then(res => {
        switch (res.status) {
          case 201:
            alert('연장신청에 성공했습니다.');
            this.setState({
              refreshFlag: true
            });
            break;
          case 205:
            alert('이미 신청된 좌석입니다.');
            break;
          default:
        }
      })
      .catch(e => {
        switch (e.response.status) {
          case 403:
            alert('권한이 없습니다.');
            break;
          case 409:
            alert('연장신청을 할 수 있는 시간이 아닙니다.');
            break;
          default:
        }
      });
  };

  render() {
    return (
      <ApplyContentContainer
        type='extension'
        menuList={this.menuList}
        typeList={this.typeList}
        refreshFlag={this.state.refreshFlag}
        afterRefresh={this.afterRefresh}
        onCancel={this.onCancel}
        onApply={this.onApply}
      />
    );
  }
}
