import React, { Component } from 'react';

import './StayApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import { submitStayInform } from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

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

  state = {
    refreshFlag: false
  };

  onApply = ({apply}) => {
    submitStayInform(getCookie('JWT'), apply + 1, getCookie('RFT'))
      .then(res => {
        switch (res.status) {
          case 201:
            alert('잔류신청에 성공했습니다.');
            this.setState({
              refreshFlag: true
            });
            break;
          default:
        }
      })
      .catch(e => {
        switch(e.response.status) {
          case 409:
            alert('잔류신청 시간이 아닙니다.');
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

  render() {
    return (
      <ApplyContentContainer
        type='stay'
        menuList={this.menuList}
        onApply={this.onApply}
        refreshFlag={this.state.refreshFlag}
        afterRefresh={this.afterRefresh}
      />
    );
  }
}
