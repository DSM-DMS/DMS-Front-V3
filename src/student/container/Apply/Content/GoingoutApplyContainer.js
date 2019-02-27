import React, { Component } from 'react';

import './GoingoutApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';

export default class GoingoutApplyContainer extends Component {
  typeList = [
    { content: '토요일', val: 'sat' },
    { content: '일요일', val: 'sun' },
    { content: '평일', val: 'weekday' }
  ];

  onCancel = () => {};

  onApply = () => {};

  render() {
    return (
      <ApplyContentContainer
        type='goingout'
        typeList={this.typeList}
        onCancel={this.onCancel}
        onApply={this.onApply}
      />
    );
  }
}
