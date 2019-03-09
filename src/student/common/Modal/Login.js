import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCookie } from '../../../lib/cookie';
import {
  isLogin,
  autoLogin,
  setStudentPointData,
  setStudentBasicData,
} from '../../../actions';

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
        .post('https://dms-api.istruly.sexy/account/auth', {
          id: id,
          password: pw,
        })
        .then(response => {
          if (response.status === 200) {
            alert('로그인에 성공하셨습니다.');
            setCookie('JWT', response.data.accessToken);
            setCookie('ID', id);
            if (checkbox) this.props.autoLogin({ id: id, pw: pw });
            this.getPointCards(response.data.accessToken);
            this.getBasicData(response.data.accessToken);
            this.props.isLogin(true);
            this.props.setModal('');
          } else if (response.status === 204) {
            alert('비밀번호가 틀렸습니다.');
          }
        });
    } else {
      alert('공란이 존재합니다.');
    }
  };

  getPointCards = token => {
    axios
      .get('http://ec2.istruly.sexy:5000/info/point', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        if (response.status === 200) {
          this.props.setStudentPointData(response.data.point_history);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  getBasicData = token => {
    axios
      .get('http://ec2.istruly.sexy:5000/info/basic', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        if (response.status === 200) {
          this.props.setStudentBasicData(response.data);
        }
      });
  };

  enterKeyPress = e => {
    if (e.key === 'Enter') {
      this.loginBtn();
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
          onKeyPress={this.enterKeyPress}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="modal--input"
          onChange={this.pwHandler}
          value={this.state.pw}
          onKeyPress={this.enterKeyPress}
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
              자동 로그인
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
  autoLogin: data => dispatch(autoLogin(data)),
  setStudentPointData: pointData => dispatch(setStudentPointData(pointData)),
  setStudentBasicData: pointData => dispatch(setStudentBasicData(pointData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
