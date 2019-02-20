import React, { Component } from 'react';
import axios from 'axios';

import { getCookie } from '../../../lib/cookie';

import './Report.scss';

class BugReport extends Component {
  state = {
    title: '',
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
        'http://ec2.istruly.sexy:5000/report/bug/1',
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
      });
  };

  render() {
    return (
      <div className="report--wrapper">
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          className="modal--input"
          name="bugReport.title"
          onChange={this.onChangeHandler}
          value={this.state.title}
        />
        <textarea
          className="report--textarea"
          placeholder="버그내용을 입력해주세요."
          name="bugReport.description"
          onChange={this.onChangeHandler}
          value={this.state.description}
        />
        <button className="modal--submit" onClick={this.onSubmitHandler}>
          로그인
        </button>
      </div>
    );
  }
}

export default BugReport;
