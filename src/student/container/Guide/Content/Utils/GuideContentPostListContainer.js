import React, { Component } from 'react';

import './GuideContentPostListContainer.scss';
import GuidePostItem from '../../../../component/Guide/GuidePostItem';

export default class GuideContentPostListContainer extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map(post => {
      const { title, key, postDate } = post;
      return <GuidePostItem title={title} key={key} postDate={postDate} />;
    });
    return <ol className='guide--postlist--wrapper'>{postList}</ol>;
  }
}
