import React, { Component } from 'react';

import GuideContentContainer from './Utils/GuideContentContainer';
import './GuideNoticeContainer.scss';

export default class GuideNoticeContainer extends Component {
  render() {
    const type = 'notice';
    return <GuideContentContainer type={type} />;
  }
}
