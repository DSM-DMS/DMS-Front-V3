import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';

import Modal from './Modal'
import Login from './Login';

class ModalContainer extends Component {

    changeModal = (value) => {
        const { setModal } = this.props;
        setModal(value);
    }

    render() {
        const { modalState } = this.props;
        // if(!modalState) return null;

        if(modalState === 'login')
            return (
                <Fragment>
                    <Modal title="로그인" component={Login} subTitle="아직 DMS 회원이 아니시라면?" link="회원가입"/>
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