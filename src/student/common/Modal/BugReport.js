import React, { Component } from 'react';
import axios from 'axios';

import { getCookie } from '../../../lib/cookie';

import './Report.scss';

class BugReport extends Component {
  state = {
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
        'https://dms-api.istruly.sexy/report/bug/1',
        { content: this.state.description },
        { headers: { Authorization: `Bearer ${getCookie('JWT')}` } },
      )
      .then(res => {
        if (res.status === 201) {
          alert('버그 신고에 성공하셨습니다. ㅇㅁㅇ');
          this.props.setModal('');
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 400) {
          alert('옳지 않은 입력이 있습니다.');
        }
      });
  };

  render() {
    return (
      <div className="report--wrapper">
        <textarea
          className="report--textarea report--textarea--bug"
          placeholder="버그내용을 입력해주세요."
          name="bugReport.description"
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

export default BugReport;
