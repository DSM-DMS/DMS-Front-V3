import React, { Component } from 'react';

import './GuideContentPostContainer.scss';

export default class GuideContentPostContainer extends Component {
  render() {
    const { content } = this.props;
    return <div className='guide--content--post--detail'>{content}</div>;
  }
}
