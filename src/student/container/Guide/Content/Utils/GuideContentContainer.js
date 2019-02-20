import React, { Component } from 'react';

import {
  getNoticeList,
  getRuleList,
  getFaqList,
  getNoticeDetailPost,
  getRuleDetailPost,
  getFaqDetailPost
} from '../../../../../lib/guideAPI';

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
      loading: false,
      guidePostList: [],
      detailPost: null
    };
  }

  setPostList = () => {
    if (this.state.loading) return;
    this.setState({
      loading: true
    });

    try {
      switch (this.props.type) {
        case 'notice':
          this.getNoticeList();
          break;
        case 'rule':
          this.getRuleList();
          break;
        case 'faq':
          this.getFaqList();
          break;
        default:
      }
    } catch (e) {
      alert('error');
      console.error(e);
    }
    this.setState({
      loading: false
    });
  };

  setDetailPost = id => {
    if (this.state.loading) return;
    this.setState({
      isOnDetail: true,
      loading: true
    });

    try {
      switch (this.props.type) {
        case 'notice':
          this.getNoticeDetailPost(id);
          break;
        case 'rule':
          this.getRuleDetailPost(id);
          break;
        case 'faq':
          this.getFaqDetailPost(id);
          break;
        default:
      }
    } catch (e) {
      alert('error');
      console.error(e);
    }
    this.setState({
      loading: false
    });
  };

  getNoticeList = async () => {
    const response = await getNoticeList();
    const noticeList = response.data.noticeList;

    this.setState({
      guidePostList: noticeList
    });
  };

  getRuleList = async () => {
    const response = await getRuleList();
    const ruleList = response.data.ruleList;

    this.setState({
      guidePostList: ruleList
    });
  };

  getFaqList = async () => {
    const response = await getFaqList();
    const faqList = response.data.qnaList;

    this.setState({
      guidePostList: faqList
    });
  };

  getFaqDetailPost = async id => {
    const response = await getFaqDetailPost(id);
    const detailPost = response.data;

    this.setState({
      detailPost
    });
  };

  getNoticeDetailPost = async id => {
    const response = await getNoticeDetailPost(id);
    const detailPost = response.data;

    this.setState({
      detailPost
    });
  };

  getRuleDetailPost = async id => {
    const response = await getRuleDetailPost(id);
    const detailPost = response.data;

    this.setState({
      detailPost
    });
  };

  componentDidMount() {
    this.setPostList();
  }

  render() {
    const { type } = this.props;
    const { content, isOnDetail, guidePostList } = this.state;
    let detailHeader;
    if (isOnDetail) {
      const { title, postDate } = this.state.detailPost;
      detailHeader = (
        <div className='guide--content--detail--wrapper'>
          <span className='guide--content--detail--title'>{title}</span>
          <span className='guide--content--detail--date'>{postDate}</span>
        </div>
      );
    }

    return (
      <div className='guide--content--wrapper'>
        <div className='guide--content--title--wrapper'>
          <p className='guide--content--title'>{content[type].title}</p>
          {isOnDetail && detailHeader}
        </div>
        {!isOnDetail ? (
          <GuideContentPostListContainer
            posts={guidePostList}
            type={type}
            setDetailPost={this.setDetailPost}
          />
        ) : (
          <GuideContentPostContainer content={this.state.detailPost.content} />
        )}
      </div>
    );
  }
}
