import React, { Component } from 'react';

import './GoingoutApplyContainer.scss';

import ApplyContentContainer from '../Utils/ApplyContentContainer';
import {
  postGoingoutInform,
  deleteGoingoutInform,
} from '../../../../lib/applyAPI';
import { getCookie } from '../../../../lib/cookie';

export default class GoingoutApplyContainer extends Component {
  state = {
    refreshFlag: false,
  };

  onCancel = id => {
    console.log(id);
    deleteGoingoutInform(getCookie('JWT'), id).then(response => {
      switch (response.status) {
        case 200:
          alert('외출 신청 취소 성공');
          this.setState({
            refreshFlag: true,
          });
          break;
        case 204:
          alert('외출 신청 내역이 없습니다.');
          break;
        default:
      }
    });
  };
  onApply = ({
    year,
    month,
    day,
    outHour,
    outMin,
    returnHour,
    returnMin,
    reason,
  }) => {
    // const gooutDate = `${year}-${this.addZero(month)}-${this.addZero(
    //   day
    // )} ${this.addZero(outHour)}:${this.addZero(outMin)}`;
    // const returnDate = `${year}-${this.addZero(month)}-${this.addZero(
    //   day
    // )} ${this.addZero(returnHour)}:${this.addZero(returnMin)}`;
    const dateForm = `${this.addZero(month)}-${this.addZero(
      day,
    )} ${this.addZero(outHour)}:${this.addZero(outMin)} ~ ${this.addZero(
      returnHour,
    )}:${this.addZero(returnMin)}`;
    alert('외출 신청 기능이 미완성입니다.\n추후 공지 후 다시 이용해주세요.');
    // postGoingoutInform(getCookie('JWT'), gooutDate, returnDate, reason)
    /*
    postGoingoutInform(getCookie("JWT"), dateForm, reason)
      .then(response => {
        switch (response.status) {
          case 201:
            alert('외출 신청 성공');
            this.setState({
              refreshFlag: true
            });
            break;
          case 204:
            alert('외출 신청가능 시간이 아닙니다.');
            break;
          default:
        }
      })
      .catch(e => {
        switch (e.response.status) {
          case 403:
            alert('권한이 없습니다.');
            break;
          default:
        }
      });*/
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
