import React, { Component } from 'react';

import NoticeWrite from '../../component/Notice/NoticeWrite'

import { noticePost } from '../../lib/notice'

import {connect} from 'react-redux'

class NoticeWriteContainer extends Component {
    componentDidMount = () => {
        if(this.props.login.isLogin === false) {
            alert('로그인이 필요합니다')
            this.props.history.push('/admin/login')
        }
    }

    state = {
        title : "",
        content : "",
    }

    HandleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    HandleAJAX = async () => {
        const { title, content } = this.state;
        await noticePost('notice', title, content)
        alert('글 작성에 성공했습니다!')
        this.props.history.push('/admin/notice')
    }

    HandleCancle = () => {
        alert('글 작성을 취소했습니다')
        this.props.history.push('/admin/notice')
    }

    render() {
        return (
            <NoticeWrite HandleCancle = {this.HandleCancle} HandleAJAX = {this.HandleAJAX} HandleChange = {this.HandleChange}/>
        );
    }
}


const mapStateToProps = (state) => ({
    login : state.adminLogin
})

export default connect(mapStateToProps)(NoticeWriteContainer);