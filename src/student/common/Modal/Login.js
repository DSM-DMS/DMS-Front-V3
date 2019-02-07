import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import { isLogin } from '../../../actions';

import './Login.scss';

class Login extends Component {
  state = {
    id: '',
    pw: '',
    checkbox: false,
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

  checkboxHandler = e => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  loginBtn = () => {
    const { id, pw, checkbox } = this.state;

    if (id && pw) {
      axios
        .post('http://ec2.istruly.sexy:5000/account/auth', {
          id: id,
          password: pw,
        })
        .then(response => {
          if (response.status === 200) {
            alert('로그인에 성공하셨습니다.');
            if (checkbox) {
              setCookie('JWT', response.data.accessToken, 180);
              setCookie('RFT', response.data.refreshToken, 180);
            } else {
              setCookie('JWT', response.data.accessToken);
              setCookie('RFT', response.data.refreshToken);
            }
            this.props.setModal('');
            this.props.isLogin(true);
          }
        });
    } else {
      alert('공란이 존재합니다.');
    }
  };

  render() {
    const { setModal } = this.props;

    return (
      <div className="login--wrapper">
        <input
          type="text"
          placeholder="아이디"
          className="modal--input"
          onChange={this.idHandler}
          value={this.state.id}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="modal--input"
          onChange={this.pwHandler}
          value={this.state.pw}
        />
        <button className="modal--submit" onClick={this.loginBtn}>
          로그인
        </button>
        <div className="login--bottom--wrapper">
          <span className="login--checkbox--wrapper">
            <input
              type="checkbox"
              className="login--checkbox"
              id="login--checkbox"
              onChange={this.checkboxHandler}
              value={this.state.checkbox}
            />
            <label htmlFor="login--checkbox" className="login--checkbox--label">
              비밀번호 저장
            </label>
          </span>
          <span
            className="login--forgot"
            onClick={() => setModal('비밀번호 찾기')}
          >
            비밀번호를 잊으셨나요 ?
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  isLogin: bool => dispatch(isLogin(bool)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
