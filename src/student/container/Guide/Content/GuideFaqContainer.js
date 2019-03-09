import React, { Component } from 'react';

import GuideContentContainer from './Utils/GuideContentContainer';
import './GuideFaqContainer.scss';

export default class GuideFaqContainer extends Component {
  render() {
    const type = 'faq';
    return <GuideContentContainer type={type} history={this.props.history}/>;
  }
}
