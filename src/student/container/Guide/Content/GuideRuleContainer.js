import React, { Component } from 'react';

import GuideContentContainer from './Utils/GuideContentContainer';
import './GuideRuleContainer.scss';

export default class GuideRuleContainer extends Component {
  render() {
    const type = 'rule';
    return <GuideContentContainer type={type} history={this.props.history} />;
  }
}
