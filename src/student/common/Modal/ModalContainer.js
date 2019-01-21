import React, { Component } from "react";
import { connect } from "react-redux";
import { setModal } from "../../../actions";

import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

class ModalContainer extends Component {
  changeModal = value => {
    const { setModal } = this.props;
    setModal(value);
  };

  render() {
    const { modalState } = this.props;
    // if(!modalState) return null;

    if (modalState === "로그인")
      return (
        <Modal
          title="로그인"
          component={<Login setModal={this.changeModal} />}
          subTitle="아직 DMS 회원이 아니시라면?"
          link="회원가입"
          setModal={this.changeModal}
        />
      );
    else if (modalState === "회원가입")
      return (
        <Modal
          title="회원가입"
          component={<Register setModal={this.changeModal} />}
          subTitle="이미 DMS 회원이시라면?"
          link="로그인"
          setModal={this.changeModal}
        />
      );
    else if (modalState === "비밀번호 찾기")
      return (
        <Modal
          title="비밀번호 찾기"
          component={<ForgotPassword />}
          subTitle="아직 DMS 회원이 아니시라면 ?"
          link="회원가입"
          setModal={this.changeModal}
        />
      );
    else return null;
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.modal.modalState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModal: value => dispatch(setModal(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);