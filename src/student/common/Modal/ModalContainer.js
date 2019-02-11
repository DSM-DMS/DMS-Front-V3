import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';

import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import PointContainer from './PointContainer';
import ChangePassword from './ChangePassword';

class ModalContainer extends Component {
  changeModal = value => {
    const { setModal } = this.props;
    setModal(value);
  };

  render() {
    const { modalState } = this.props;
    // if(!modalState) return null;

    if (modalState === '로그인')
      return (
        <Modal
          title="로그인"
          component={<Login setModal={this.changeModal} />}
          subTitle="아직 DMS 회원이 아니시라면?"
          link="회원가입"
          setModal={this.changeModal}
        />
      );
    else if (modalState === '회원가입')
      return (
        <Modal
          title="회원가입"
          component={<Register setModal={this.changeModal} />}
          subTitle="이미 DMS 회원이시라면?"
          link="로그인"
          setModal={this.changeModal}
        />
      );
    else if (modalState === '비밀번호 찾기')
      return (
        <Modal
          title="비밀번호 찾기"
          component={<ForgotPassword />}
          subTitle="아직 DMS 회원이 아니시라면 ?"
          link="회원가입"
          setModal={this.changeModal}
        />
      );
    else if (modalState === '상벌점 내역 확인')
      return <PointContainer setModal={this.changeModal} />;
    else if (modalState === '비밀번호 변경')
      return (
        <Modal
          title="비밀번호 변경"
          component={<ChangePassword />}
          subTitle="비밀번호를 바꿔보세요."
          link=""
          setModal={this.changeModal}
        />
      );
    else {
      console.log(modalState);
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.modal.modalState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModal: value => dispatch(setModal(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);
