import React, { Component } from 'react';

import './ExtensionApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';

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
  render() {
    return <ApplyContentContainer type='extension' menuList={this.menuList} typeList={this.typeList} />;
  }
}
