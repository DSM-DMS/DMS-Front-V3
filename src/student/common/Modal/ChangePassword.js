import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCookie, removeCookie } from '../../../lib/cookie';
import { patchPassword } from '../../../lib/studentInfoAPI';

import { isLogin, setModal } from '../../../actions';

import './ChangePassword.scss';

class ChangePassword extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    newPasswordChk: '',
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitBtn = e => {
    const jwtToken = getCookie('JWT');
    const { currentPassword, newPassword, newPasswordChk } = this.state;
    if (
      currentPassword &&
      newPassword &&
      newPasswordChk &&
      newPassword === newPasswordChk
    ) {
      patchPassword(currentPassword, newPassword, `Bearer ${jwtToken}`)
        .then(response => {
          if (response.status === 201) {
            alert('비밀번호 변경에 성공하셨습니다. \n다시 로그인하세요.');
            removeCookie('JWT');
            removeCookie('RFT');
            this.props.isLogin(false);
            this.props.history.push('/');
            this.props.setModal('');
          } else if (response.status === 205) {
            alert('현재 비밀번호와 바꾸시려는 비밀번호가 같습니다.');
          }
        })
        .catch(err => {
          if (err.response.status === 403) {
            alert('비밀번호가 틀렸습니다.');
          }
        });
    } else if (!(currentPassword && newPassword && newPasswordChk)) {
      alert('공란이 있습니다.');
    } else if (
      currentPassword &&
      newPassword &&
      newPasswordChk &&
      newPassword.length < 8
    ) {
      alert('비밀번호는 8자리 이상입니다.');
    } else if (
      currentPassword &&
      newPassword &&
      newPasswordChk &&
      newPassword &&
      newPassword !== newPasswordChk
    ) {
      alert('새 비밀번호가 다릅니다.');
    }
  };

  render() {
    return (
      <div className="changepassword--wrapper">
        <input
          type="password"
          placeholder="현재 비밀번호"
          name="currentPassword"
          className="modal--input"
          onChange={this.onChangeHandler}
          value={this.state.currentPassword}
        />
        <input
          type="password"
          placeholder="바꿀 비밀번호"
          name="newPassword"
          className="modal--input"
          onChange={this.onChangeHandler}
          value={this.state.newPassword}
        />
        <input
          type="password"
          placeholder="바꿀 비밀번호"
          name="newPasswordChk"
          className="modal--input"
          onChange={this.onChangeHandler}
          value={this.state.newPasswordChk}
        />
        <button className="modal--submit" onClick={this.onSubmitBtn}>
          비밀번호 변경
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: value => dispatch(setModal(value)),
  isLogin: bool => dispatch(isLogin(bool)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(ChangePassword));
