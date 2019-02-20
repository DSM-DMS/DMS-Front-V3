import React, { Component } from 'react';
import ShowNotice from '../../component/Notice/ShowNotice'

import { noticeContentGet } from '../../lib/notice'

class ShowNoticeContainer extends Component {
    state = {
        content: "",
        title: ""
    }

    TaskData = async () => {
        const { match } = this.props
        console.log(parseInt(match.params.postId))
        const response = await noticeContentGet('notice', parseInt(match.params.postId))
        const {content, title} = response.data
        this.setState({
            content : content,
            title : title
        })
    }

    componentDidMount() {
        this.TaskData()
    }

    render() {
        const data = this.state 
        return (
            <ShowNotice data = {data}/>
        );
    }
}

export default ShowNoticeContainer;