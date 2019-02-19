import React, { Component } from 'react';

import './GuideContentContainer.scss';
import GuideContentPostListContainer from './GuideContentPostListContainer';
import GuideContentPostContainer from './GuideContentPostContainer';

export default class GuideContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        faq: {
          title: '자주하는질문'
        },
        notice: {
          title: '공지사항'
        },
        rule: {
          title: '기숙사 규정'
        }
      },
      isOnDetail: false,
      noticeList: [
        {
          noticeId: '12',
          postDate: '작성 일자',
          title: '제목'
        },
        {
          noticeId: '32',
          postDate: '작성 일자',
          title: '제목'
        }
      ]
    };
  }
  render() {
    const { type } = this.props;
    const { content, isOnDetail, noticeList } = this.state;
    return (
      <div className='guide--content--wrapper'>
        <p className='guide--content--title'>{content[type].title}</p>
        {!isOnDetail && <GuideContentPostListContainer posts={noticeList}/>}
      </div>
    );
  }
}
