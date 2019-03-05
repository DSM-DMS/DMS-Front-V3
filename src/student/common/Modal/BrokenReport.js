import React, { Component } from 'react';
import axios from 'axios';

import { getCookie } from '../../../lib/cookie';

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
    axios
      .post(
        'https://dms-api.istruly.sexy/report/facility',
        {
          room: parseInt(this.state.room),
          content: this.state.description,
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie('JWT')}`,
          },
        },
      )
      .then(res => {
        if (res.status === 201) {
          alert('성공적으로 신고하였습니다.');
          this.props.setModal('');
        }
      })
      .catch(err => {
        if (err.response.status === 403) {
          alert('권한이 없습니다.');
        }
      });
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
