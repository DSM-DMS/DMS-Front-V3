import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';

import Modal from './Modal';
import Login from './Login';
import Register from './Register';

class ModalContainer extends Component {

    changeModal = (value) => {
        const { setModal } = this.props;
        setModal(value);
    }

    render() {
        const { modalState } = this.props;
        // if(!modalState) return null;

        if(modalState === '로그인')
            return (
                <Fragment>
                    <Modal title="로그인" component={<Login />} subTitle="아직 DMS 회원이 아니시라면?" link="회원가입" setModal={this.changeModal}/>
                </Fragment>
            );
        else if(modalState === '회원가입')
            return (
                <Fragment>
                    <Modal title="회원가입" component={<Register />} subTitle="이미 DMS 회원이시라면?"  link="로그인" setModal={this.changeModal}/>
                </Fragment>
            );
        return (
            <Fragment>
                <Modal title="로그인" component={<Login />} subTitle="아직 DMS 회원이 아니시라면?"  link="회원가입" setModal={this.changeModal}/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalState: state.modal.modalState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModal: (value) => dispatch(setModal(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);