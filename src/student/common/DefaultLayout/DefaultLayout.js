import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isLogin } from '../../../actions';

import { getCookie } from '../../../lib/cookie';

import Modal from '../../common/Modal/ModalContainer';

class DefaultLayout extends Component {
  componentDidMount() {
    const accessToken = getCookie('JWT');
    const refreshToken = getCookie('RFT');

    if (accessToken || refreshToken) {
      this.props.isLogin(true);
    } else {
      this.props.isLogin(false);
    }
  }

  render() {
    return (
      <Fragment>
        <Modal />
        {this.props.children}
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  isLogin: bool => dispatch(isLogin(bool)),
});

export default connect(
  null,
  mapDispatchToProps,
)(DefaultLayout);
