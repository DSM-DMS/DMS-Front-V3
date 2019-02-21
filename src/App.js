import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import axios from 'axios';

import { connect } from 'react-redux';
import { autoLogin, isLogin } from './actions';
import { getCookie, setCookie, removeCookie } from './lib/cookie';

import MainContainer from './student/container/Main/MainContainer';
import AdminMainContainer from './admin/container/Main/AdminMainContainer';
import ApplyMainContainer from './student/container/Apply/ApplyMainContainer';
import DomitoryRuleContainer from './admin/container/DomitoryRule/DomitoryRuleContainer';
import CommonDesign from './admin/common/commonDesign/CommonDesign';
import ShowDomitoryRuleContainer from './admin/container/DomitoryRule/ShowDomitoryRuleContainer';
import NoticeContainer from './admin/container/Notice/NoticeContainer';
import NoticeWriteContainer from './admin/container/Notice/NoticeWriteContainer';
import StudentDefaultLayout from './student/common/DefaultLayout/DefaultLayout';
import MyPageContainer from './student/container/MyPage/MyPageContainer';
import GuideMainContainer from './student/container/Guide/GuideMainContainer';

import setHeader from './lib/setHeader';

axios.interceptors.request.use(
  conf => {
    conf.headers = setHeader(conf.headers);
    return conf;
  },
  err => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  res => {
    if (!!res.headers['new-access-token']) {
      setCookie('JWT', res.headers['new-access-token']);
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

class App extends Component {
  componentWillMount() {
    if (
      (navigator.appName === 'Netscape' &&
        navigator.userAgent.search('Trident') !== -1) ||
      navigator.userAgent.indexOf('msie') !== -1
    ) {
      alert(
        '인터넷 익스플로러 브라우저 입니다.\n DMS는 공식적으로 IE를 지원하지 않습니다.',
      );
    }

    this.loginApi();

    window.addEventListener('beforeunload', this.setAutoLogin);
  }

  loginApi = async () => {
    const id = getCookie('id');
    const pw = getCookie('pw');
    if (id && pw) {
      await axios
        .post('http://ec2.istruly.sexy:5000/account/auth', {
          id: id,
          password: pw,
        })
        .then(response => {
          if (response.status === 200) {
            setCookie('JWT', response.data.accessToken);
            setCookie('ID', id);
            removeCookie('id');
            removeCookie('pw');
            this.props.autoLogin({ id: id, pw: pw });
            this.props.isLogin(true);
          }
        });
    }
  };

  setAutoLogin = () => {
    const { id, pw, autoLogin } = this.props;
    if (id && pw) {
      autoLogin({ id: '', pw: '' });
      setCookie('id', id, 150);
      setCookie('pw', pw, 150);
    }
    removeCookie('JWT');
  };

  render() {
    if (
      (navigator.appName === 'Netscape' &&
        navigator.userAgent.search('Trident') !== -1) ||
      navigator.userAgent.indexOf('msie') !== -1
    ) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            color: 'red',
          }}
        >
          IE를 지원하지 않습니다. 타 브라우저로 접속해주세요.
        </div>
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminMainContainer} exact />
          <Route path="/apply/extension" component={ApplyMainContainer} exact />
          <Route path="/apply/goingout" component={ApplyMainContainer} exact />
          <Route path="/apply/stay" component={ApplyMainContainer} exact />
          <Route path="/apply/music" component={ApplyMainContainer} exact />
          <Route path="/guide/faq" component={GuideMainContainer} exact />
          <Route path="/guide/notice" component={GuideMainContainer} exact />
          <Route path="/guide/rule" component={GuideMainContainer} exact />
          <Route
            path="/admin/:uri?"
            render={() => (
              <CommonDesign>
                <Switch>
                  <Route
                    path="/admin/domitoryrule"
                    component={DomitoryRuleContainer}
                    exact
                  />
                  <Route
                    path="/admin/domitoryrule/:postId"
                    component={ShowDomitoryRuleContainer}
                  />
                  <Route
                    path="/admin/notice"
                    component={NoticeContainer}
                    exact
                  />
                  <Route
                    path="/admin/notice/write"
                    component={NoticeWriteContainer}
                    exact
                  />
                </Switch>
              </CommonDesign>
            )}
          />
          <Route
            path="/:uri?"
            render={() => (
              <Fragment>
                <StudentDefaultLayout>
                  <Switch>
                    <Route path="/" component={MainContainer} exact />
                    <Route path="/apply" component={MainContainer} exact />
                    <Route path="/guide" component={MainContainer} exact />
                    <Route path="/extra" component={MainContainer} exact />
                    <Route path="/mypage" component={MyPageContainer} exact />
                  </Switch>
                </StudentDefaultLayout>
              </Fragment>
            )}
          />
          }/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  id: state.login.id,
  pw: state.login.pw,
});

const mapDispatchToProps = dispatch => ({
  autoLogin: val => dispatch(autoLogin(val)),
  isLogin: bool => dispatch(isLogin(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
