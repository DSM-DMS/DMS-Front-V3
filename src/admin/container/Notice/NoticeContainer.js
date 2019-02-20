import React, { Component } from 'react';

import { noticeGet, noticeDelete } from '../../lib/notice'

import Notice from '../../component/Notice/Notice'
import NoticeList from '../../component/Notice/NoticeList'

class NoticeContainer extends Component {
    TaskData = async () => {
        console.log('TaskData')
        const response = await noticeGet('notice')
        console.log(response)
        this.HandleAfterRequest(response)
        console.log('TaskData end')
    }

    HandleAfterRequest = (response) => {
        console.log(response)
        const { noticeList } = response.data
        this.setState({
            noticeList
        })
    }

    HandleDelete = async (id) => {
        console.log('실행됨')
        await noticeDelete('notice', id)
        this.TaskData()
    }

    state = {
        noticeList : []
    }

    componentDidMount() {
        this.TaskData()
    }

    render() {
        const { noticeList } = this.state
        const List = noticeList.reverse().map(data => (
            <NoticeList HandleDelete = {this.HandleDelete} data = {data} key = {data.noticeId}/>
        ))
        return (
            <Notice List = {List}/>
        );
    }
}

export default NoticeContainer;