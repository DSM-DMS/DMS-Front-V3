import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../../actions';
import { withRouter } from 'react-router-dom';

import HeaderButton from './HeaderButton';

import Header from './Header.js';

class HeaderContainer extends Component {
  state = {
    buttonList: [
      { title: '신청화면', page: 'apply' },
      { title: '공지사항', page: 'guide' },
      { title: '부가기능', page: 'extra' },
    ],
  };

  changeModal = value => {
    const { setModal } = this.props;
    setModal(value);
  };

  render() {
    const { location, history } = this.props;
    const { isLogin } = this.props;
    const buttonList = this.state.buttonList.map(data => (
      <HeaderButton title={data.title} scroll={data.page} key={data.page} />
    ));
    const variableButton =
      location.pathname === '/' ||
      location.pathname === '/apply' ||
      location.pathname === '/guide' ||
      location.pathname === '/extra' ? (
        isLogin ? (
          <button
            className="header--button--mypage"
            onClick={() => history.push('/mypage')}
          >
            내 정보
          </button>
        ) : (
          <button
            className="header--button"
            onClick={() => this.changeModal('로그인')}
          >
            로그인
          </button>
        )
      ) : (
        <button
          className="header--meal--button"
          onClick={() => {
            history.push('/');
          }}
        >
          급식 메뉴
        </button>
      );
    return (
      <Fragment>
        <Header
          buttonList={buttonList}
          setModal={this.changeModal}
          variableButton={variableButton}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = dispatch => ({
  setModal: value => dispatch(setModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HeaderContainer));
