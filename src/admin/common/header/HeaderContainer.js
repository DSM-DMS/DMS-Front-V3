import React, { Component, Fragment } from 'react';

import HeaderButton from './HeaderButton';

import Header from './Header.js';

class HeaderContainer extends Component {

    state = {
        buttonList : [
            {title: '관리자 계정 생성', page: 'apply'},
            {title: '관리자 계정 삭제', page: 'post'}, 
            {title: '학생 계정 삭제', page: 'extra'}
        ]
    }

    render() {
        const buttonList = this.state.buttonList.map(data => (
            <HeaderButton title={data.title} key={data.page}/>
        ))

        return (
            <Fragment>
                <Header buttonList={buttonList}/>
            </Fragment>
        );
    }
}

export default HeaderContainer;