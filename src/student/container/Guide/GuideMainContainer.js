import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setModal } from '../../../actions';

import GuideMenuContainer from './Menu/GuideMenuContainer';
import GuideFaqContainer from './Content/GuideFaqContainer';
import GuideNoticeContainer from './Content/GuideNoticeContainer';
import GuideRuleContainer from './Content/GuideRuleContainer';

import { getCookie } from '../../../lib/cookie';

import './GuideMainContainer.scss';

class GuideMainContainer extends Component {
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

  componentDidMount() {
    const { history, setModal } = this.props;

    if (!getCookie('RFT')) {
      alert('로그인이 필요합니다.');
      setModal('로그인');
      history.push('');
    }
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
      <div
        className="apply--main--wrapper"
        style={{ width: window.screen.width }}
      >
        <GuideMenuContainer selectedMenu="guide" />
        {content}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setModal: val => dispatch(setModal(val))
});

export default connect(
  null,
  mapDispatchToProps
)(GuideMainContainer);
