import React, { Component, Fragment } from 'react';

import Post from '../../../component/Main/Post/Post';
import PostCard from '../../../component/Main/Post/PostCard';

import ImgNotice from '../../../../assets/img/img_notice.png'
import ImgRule from '../../../../assets/img/img_rule.png'
import ImgQuestion from '../../../../assets/img/img_question.png'

class PostContainer extends Component {

    state = {
        postCardList: [
            {
                type: 'notice',
                title: '공지사항',
                subtitle: '사감부에서 공지된 사항을 확인하세요.',
                src: ImgNotice
            },
            {
                type: 'rule',
                title: '기숙사 규정',
                subtitle: '사감부에서 제정한 규정을 확인하세요.',
                src: ImgRule
            },
            {
                type: 'question',
                title: '자주하는 질문',
                subtitle: '자주하는 질문에 대한 사감부측 답변을 확인하세요.',
                src: ImgQuestion
            }
        ]
    }

    render() {
        const { postCardList } = this.state;
        const cardList = postCardList.map(data => <PostCard type={data.type} title={data.title} subtitle={data.subtitle} src={data.src} key={data.title + '-post'}/>)
        return (
            <Fragment>
                <Post cardList={cardList}/>
            </Fragment>
        );
    }
}

export default PostContainer;