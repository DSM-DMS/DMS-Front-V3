import React, { Component, Fragment } from 'react';
import ShowNotice from '../../component/Notice/ShowNotice'
import Loading from '../../common/Loading/Loading'

import { noticeContentGet } from '../../lib/notice'

class ShowNoticeContainer extends Component {
    state = {
        content: "",
        title: "",
        loading: true
    }

    TaskData = async () => {
        const { match } = this.props
        console.log(parseInt(match.params.postId))
        try {
            const response = await noticeContentGet('notice', parseInt(match.params.postId))
            const {content, title} = response.data
            this.setState({
                content : content,
                title : title,
                loading: false
            })
        } catch (err) {
            alert('로그인이 필요합니다')
            this.props.history.push('/admin/login')
        }
    }

    componentDidMount() {
        this.TaskData()
    }

    render() {
        const data = this.state
        const { loading } = this.state
        return (
            <Fragment>
                {loading &&
                    <Loading />
                }
                <ShowNotice data = {data}/>
            </Fragment>
        );
    }
}

export default ShowNoticeContainer;