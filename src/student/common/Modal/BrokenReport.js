import React, { Component } from 'react';

import { getCookie } from '../../../lib/cookie';
import { postFacilityReport } from '../../../lib/reportAPI';

import './Report.scss';

class BrokenReport extends Component {
  state = {
    room: '',
    description: '',
  };

  onChangeHandler = e => {
    let valName = e.target.name.split('.')[1];
    this.setState({
      [valName]: e.target.value,
    });
  };

  onSubmitHandler = () => {
    const accessToken = getCookie('JWT');
    const refreshToken = getCookie('RFT');
    if (
      this.state.room &&
      this.state.description &&
      (accessToken || refreshToken)
    )
      postFacilityReport(
        parseInt(this.state.room),
        this.state.description,
        accessToken,
        refreshToken,
      )
        .then(res => {
          if (res.status === 201) {
            alert('성공적으로 신고하였습니다.');
            this.props.setModal('');
          }
        })
        .catch(err => {
          if (err === 'expired Token') {
            alert('권한이 없습니다.');
          } else if (err.response.status === 400) {
            alert('존재하지 않는 호실 번호입니다');
          }
        });
    else if (this.state.room && this.state.description) {
      alert('공란이 존재합니다.');
    }
  };

  render() {
    return (
      <div className="report--wrapper">
        <input
          type="number"
          placeholder="호실을 입력해주세요."
          className="modal--input"
          name="brokenReport.room"
          onChange={this.onChangeHandler}
          value={this.state.room}
          min="201"
          max="518"
        />
        <textarea
          className="report--textarea"
          placeholder="고장내용을 입력해주세요."
          name="brokenReport.description"
          onChange={this.onChangeHandler}
          value={this.state.description}
        />
        <button className="modal--submit" onClick={this.onSubmitHandler}>
          신고하기
        </button>
      </div>
    );
  }
}

export default BrokenReport;
