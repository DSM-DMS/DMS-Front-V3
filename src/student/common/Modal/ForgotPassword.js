import React, { Component } from 'react';

import { postForgotPassword } from '../../../lib/studentInfoAPI';
import './ForgotPassword.scss';

class ForgotPassword extends Component {
  state = {
    id: '',
    email: '',
  };

  idHandler = e => {
    this.setState({
      id: e.target.value,
    });
  };

  emailHandler = e => {
    this.setState({
      email: e.target.value,
    });
  };

  forgotBtn = () => {
    const { id, email } = this.state;
    if (id && email) {
      postForgotPassword(id, email).then(response => {
        if (response.status === 201) {
          alert('이메일을 발송하였습니다. 학교 이메일을 확인하세요.');
        } else if (response.status === 204) {
          alert('잘못된 아이디 혹은 이메일입니다.');
        }
      });
    } else {
      alert('공백이 존재합니다.');
    }
  };

  enterKeyPress = e => {
    if (e.key === 'Enter') {
      this.forgotBtn();
    }
  };

  render() {
    return (
      <div className="forgotpassword--wrapper">
        <input
          type="text"
          placeholder="아이디"
          className="modal--input"
          onChange={this.idHandler}
          value={this.state.id}
        />
        <input
          type="text"
          placeholder="이메일"
          className="modal--input"
          onChange={this.emailHandler}
          value={this.state.email}
          onKeyPress={this.enterKeyPress}
        />
        <button className="modal--submit" onClick={this.forgotBtn}>
          비밀번호 찾기
        </button>
      </div>
    );
  }
}

export default ForgotPassword;
