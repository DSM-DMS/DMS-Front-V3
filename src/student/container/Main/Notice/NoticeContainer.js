import React, { Component, Fragment } from 'react';

import Notice from '../../../component/Notice/Notice';
import NoticeCard from '../../../component/Notice/NoticeCard';

import ImgNotice from '../../../../assets/img/img_notice.png'
import ImgRule from '../../../../assets/img/img_rule.png'
import ImgQuestion from '../../../../assets/img/img_question.png'

class NoticeContainer extends Component {

    state = {
        noticeCardList: [
            {
                title: '공지사항',
                subtitle: '사감부에서 공지된 사항을 확인하세요.',
                src: ImgNotice
            },
            {
                title: '기숙사 규정',
                subtitle: '사감부에서 제정한 규정을 확인하세요.',
                src: ImgRule
            },
            {
                title: '자주하는 질문',
                subtitle: '자주하는 질문에 대한 사감부측 답변을 확인하세요.',
                src: ImgQuestion
            }
        ]
    }

    render() {
        const { noticeCardList } = this.state;
        const cardList = noticeCardList.map(data => <NoticeCard title={data.title} subtitle={data.subtitle} src={data.src} />)
        return (
            <Fragment>
                <Notice cardList={cardList}/>
            </Fragment>
        );
    }
}

export default NoticeContainer;