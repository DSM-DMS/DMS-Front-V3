import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';
import { withRouter } from 'react-router-dom';

import HeaderButton from './HeaderButton';

import Header from './Header.js';

class HeaderContainer extends Component {

    state = {
        buttonList : [
            {title: '신청화면', page: 'apply'},
            {title: '공지사항', page: 'post'}, 
            {title: '부가기능', page: 'extra'}
        ]
    }

    changeModal = (value) => {
        const { setModal } = this.props;
        setModal(value);
    }

    variableButton = () => {
        const { location } = this.props;
        console.log(location.pathname)
        if(location.pathname === '/') {
            return (
                <button className="header--button" onClick={() => this.changeModal("로그인")}>
                로그인  
                </button>
            )
        }
        else {
            return (
                <button className="header--button">
                    급식메뉴
                </button>
            )
        }
    }

    render() {
        const buttonList = this.state.buttonList.map(data => (
            <HeaderButton title={data.title} scroll={data.page} key={data.page}/>
        ))

        return (
            <Fragment>
                <Header buttonList={buttonList} setModal={this.changeModal} variableButton={this.variableButton}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModal: (value) => dispatch(setModal(value))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(HeaderContainer));