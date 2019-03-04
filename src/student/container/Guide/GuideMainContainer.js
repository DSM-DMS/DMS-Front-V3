import React, { Component } from 'react';

import GuideMenuContainer from './Menu/GuideMenuContainer';
import GuideFaqContainer from './Content/GuideFaqContainer';
import GuideNoticeContainer from './Content/GuideNoticeContainer';
import GuideRuleContainer from './Content/GuideRuleContainer';

import './GuideMainContainer.scss';

export default class GuideMainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname
    };

    this.props.history.listen((location, action) => {
      this.setState({
        path: location.pathname
      });
    });
  }

  render() {
    const { path } = this.state;
    const { history } = this.props;
    const type = path.substring(7, path.length);
    const containerType = {
      faq: <GuideFaqContainer history={history} />,
      notice: <GuideNoticeContainer history={history} />,
      rule: <GuideRuleContainer history={history} />
    };
    const content = containerType[type];
    return (
      <div className='apply--main--wrapper'>
        <GuideMenuContainer selectedMenu='guide' />
        {content}
      </div>
    );
  }
}
