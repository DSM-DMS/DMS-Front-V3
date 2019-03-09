import React, { Component } from 'react';

import DomitoryRuleWrite from '../../component/DomitoryRule/DomitoryRuleWrite'

import { noticePost } from '../../lib/notice'

import {connect} from 'react-redux'

class DomitoryRuleWriteContainer extends Component {
    componentDidMount = () => {
        if(this.props.login.isLogin === false) {
            alert('로그인이 필요합니다')
            this.props.history.push('/admin/login')
        }
    }

    state = {
        title : "",
        content : ""
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    HandleAJAX = () => {
        const { title, content } = this.state;
        noticePost('rule', title, content)
        alert('글 작성에 성공했습니다!')
        this.props.history.push('/admin/domitoryrule')
    }

    HandleCancle = () => {
        alert('글 작성을 취소했습니다')
        this.props.history.push('/admin/domitoryrule')
    }

    render() {
        return (
            <DomitoryRuleWrite HandleCancle = {this.HandleCancle} HandleAJAX = {this.HandleAJAX} HandleChange = {this.HandleChange}/>
        );
    }
}

const mapStateToProps = (state) => ({
    login : state.adminLogin
})

export default connect(mapStateToProps)(DomitoryRuleWriteContainer);