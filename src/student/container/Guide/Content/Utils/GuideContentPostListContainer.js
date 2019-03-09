import React, { Component } from 'react';

import './GuideContentPostListContainer.scss';
import GuidePostItem from '../../../../component/Guide/GuidePostItem';

export default class GuideContentPostListContainer extends Component {
  render() {
    const { posts, setDetailPost } = this.props;
    const postList = posts.map(post => {
      const { title, postDate, id } = post;
      return (
        <GuidePostItem
          title={title}
          key={id}
          postDate={postDate.substr(0, 10)}
          id={id}
          setDetailPost={setDetailPost}
        />
      );
    });
    return <ol className='guide--postlist--wrapper'>{postList}</ol>;
  }
}
