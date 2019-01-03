import React, { Component, Fragment } from 'react';

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

    render() {
        const buttonList = this.state.buttonList.map(data => (
            <HeaderButton title={data.title} scroll={data.page} key={data.page}/>
        ))

        return (
            <Fragment>
                <Header buttonList={buttonList}/>
            </Fragment>
        );
    }
}


export default HeaderContainer;