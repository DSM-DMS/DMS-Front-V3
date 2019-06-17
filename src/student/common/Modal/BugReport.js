import React, { Component } from 'react';

import { getCookie } from '../../../lib/cookie';
import { postBugReport } from '../../../lib/reportAPI';

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
    const accessToken = getCookie('JWT');
    const refreshToken = getCookie('RFT');
    if (this.state.description && (accessToken || refreshToken))
      postBugReport(this.state.description, accessToken, refreshToken)
        .then(res => {
          if (res.status === 201) {
            alert('버그 신고에 성공하셨습니다.');
            this.props.setModal('');
          }
        })
        .catch(err => {
          if (err.response.status === 400) {
            alert('옳지 않은 입력이 있습니다.');
          }
        });
    else if (this.state.description) alert('입력을 해주세요.');
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
