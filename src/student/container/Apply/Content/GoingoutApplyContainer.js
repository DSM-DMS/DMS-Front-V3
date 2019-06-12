import React, { Component } from 'react';

import './GoingoutApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import {
  postGoingoutInform,
  deleteGoingoutInform,
  patchGoingoutInform
} from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

export default class GoingoutApplyContainer extends Component {
  state = {
    refreshFlag: false,
  };

  onCancel = id => {
    console.log(id);
    deleteGoingoutInform(getCookie('JWT'), id, getCookie('RFT')).then(response => {
      switch (response.status) {
        case 200:
          alert('외출신청 취소 성공');
          this.setState({
            refreshFlag: true,
          });
          break;
        default:
      }
    }).catch(e => {
      switch (e.response.status) {
        case 403:
          alert('권한이 없습니다.');
          break;
        case 409:
          alert('외출신청 취소가 가능한 시간이 아닙니다.');
          break;
        default:
      }
    });
  };
  onApply = ({
    month,
    day,
    outHour,
    outMin,
    returnHour,
    returnMin,
    reason,
  }) => {
    console.log(month,
      day,
      outHour,
      outMin,
      returnHour,
      returnMin,
      reason);
    if(month === '' || 
      day === '' || 
      outHour === '' || 
      outMin === '' || 
      returnHour === '' || 
      returnMin === '' || 
      reason === ''
    ) {
      alert('내용을 모두 입력하지 않았습니다.');
      return;
    }
    const dateForm = `${this.addZero(month)}-${this.addZero(
      day,
    )} ${this.addZero(outHour)}:${this.addZero(outMin)} ~ ${this.addZero(
      returnHour,
    )}:${this.addZero(returnMin)}`;
    
    postGoingoutInform(getCookie("JWT"), dateForm, reason, getCookie('RFT'))
      .then(response => {
        switch (response.status) {
          case 201:
            alert('외출신청 성공');
            this.setState({
              refreshFlag: true
            });
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
            alert('외출신청이 가능한 시간이 아닙니다.');
            break;
          default:
        }
      });
  };

  addZero = num => {
    if (num < 10) return '0' + num;
    return num;
  };

  afterRefresh = () => {
    this.setState({
      refreshFlag: false,
    });
  };

  render() {
    return (
      <ApplyContentContainer
        type="goingout"
        onCancel={this.onCancel}
        onApply={this.onApply}
        refreshFlag={this.state.refreshFlag}
        afterRefresh={this.afterRefresh}
      />
    );
  }
}
