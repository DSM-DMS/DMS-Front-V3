import React, { Component } from 'react';

import './GuideContentPostListContainer.scss';
import GuidePostItem from '../../../../component/Guide/GuidePostItem';

export default class GuideContentPostListContainer extends Component {
  render() {
    const { type, posts, setDetailPost } = this.props;
    const postList = posts.map(post => {
      const { title, postDate } = post;
      const id = post[`${type}Id`];
      return (
        <GuidePostItem
          title={title}
          key={id}
          postDate={postDate}
          id={id}
          setDetailPost={setDetailPost}
        />
      );
    });
    return <ol className='guide--postlist--wrapper'>{postList}</ol>;
  }
}
