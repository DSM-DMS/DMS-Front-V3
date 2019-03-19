import React, { Component } from 'react';
import axios from 'axios';

import './Register.scss';

class Register extends Component {
  state = {
    uuid: '',
    id: '',
    pw: '',
    pwCheck: '',
  };

  uuidHandler = e => {
    this.setState({
      uuid: e.target.value,
    });
  };

  idHandler = e => {
    this.setState({
      id: e.target.value,
    });
  };

  pwHandler = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  pwCheckHandler = e => {
    this.setState({
      pwCheck: e.target.value,
    });
  };

  registerBtn = () => {
    const { uuid, id, pw, pwCheck } = this.state;
    if (pw === pwCheck && uuid && id && pw && pwCheck) {
      axios
        .post('https://static.dms-api.istruly.sexy/account/signup', {
          uuid: uuid,
          id: id,
          password: pw,
        })
        .then(response => {
          if (response.status === 201) {
            alert('가입 완료');
            this.props.setModal('로그인');
          } else if (response.status === 204) {
            alert('유효하지 않은 확인 코드 입니다.');
            document.getElementById('register--uuid').focus();
          } else if (response.status === 205) {
            alert('중복된 ID 입니다.');
            document.getElementById('register--id').focus();
          }
        });
    } else if (pw !== pwCheck && uuid && id && pw && pwCheck) {
      alert('비밀번호가 서로 다릅니다.');
      document.getElementById('register--password--check').focus();
    } else {
      alert('공란이 존재합니다.');
    }
  };

  render() {
    return (
      <div className="register--wrapper">
        <input
          type="text"
          className="modal--input"
          placeholder="확인 코드"
          onChange={this.uuidHandler}
          id="register--uuid"
        />
        <input
          type="text"
          className="modal--input"
          placeholder="아이디"
          onChange={this.idHandler}
          id="register--id"
        />
        <input
          type="password"
          className="modal--input"
          placeholder="비밀번호"
          onChange={this.pwHandler}
        />
        <input
          type="password"
          className="modal--input"
          placeholder="비밀번호 확인"
          onChange={this.pwCheckHandler}
          id="register--password--check"
        />
        <button className="modal--submit" onClick={this.registerBtn}>
          회원가입
        </button>
      </div>
    );
  }
}

export default Register;
