import React, { Component } from 'react';

import NoticeWrite from '../../component/Notice/NoticeWrite'

import { noticePost } from '../../lib/notice'

class NoticeWriteContainer extends Component {
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
        noticePost('notice', title, content)
    }

    render() {
        return (
            <NoticeWrite HandleAJAX = {this.HandleAJAX} HandleChange = {this.HandleChange}/>
        );
    }
}

export default NoticeWriteContainer;