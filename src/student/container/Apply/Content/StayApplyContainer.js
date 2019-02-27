import React, { Component } from 'react';

import './StayApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';

export default class StayApplyContainer extends Component {
  menuList = [
    {
      content: '금요귀가',
      val: 1
    },
    {
      content: '토요귀가',
      val: 2
    },
    {
      content: '토요귀사',
      val: 3
    },
    {
      content: '잔류',
      val: 4
    }
  ];

  onApply = () => {};

  render() {
    return (
      <ApplyContentContainer
        type='stay'
        menuList={this.menuList}
        onApply={this.onApply}
      />
    );
  }
}
