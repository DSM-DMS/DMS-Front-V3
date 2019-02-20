import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import dmsApp from './reducers';
import './App.scss';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import axios from 'axios';

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

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  dmsApp(history),
  composeEnhancer(applyMiddleware(routerMiddleware(history))),
);

axios.interceptors.request.use(
  conf => {
    conf.headers = setHeader(conf.headers);
    return conf;
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
      alert('인터넷 익스플로러 브라우저 입니다.\n썩 꺼지세요.');
    }
  }
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
          크롬으로 오세요 ^^
        </div>
      );
    }
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Switch>
              <Route path="/admin" component={AdminMainContainer} exact />
              <Route
                path="/apply/extension"
                component={ApplyMainContainer}
                exact
              />
              <Route
                path="/apply/goingout"
                component={ApplyMainContainer}
                exact
              />
              <Route path="/apply/stay" component={ApplyMainContainer} exact />
              <Route path="/apply/music" component={ApplyMainContainer} exact />
              <Route path='/guide/faq' component={GuideMainContainer} exact />
              <Route path='/guide/notice' component={GuideMainContainer} exact />
              <Route path='/guide/rule' component={GuideMainContainer} exact />
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
                        <Route
                          path="/mypage"
                          component={MyPageContainer}
                          exact
                        />
                      </Switch>
                    </StudentDefaultLayout>
                  </Fragment>
                )}
              />
              }/>
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
