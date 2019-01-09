import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import dmsApp from "./reducers";
import './App.scss';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import MainContainer from "./student/container/Main/MainContainer";
import AdminMainContainer from "./admin/container/Main/AdminMainContainer";
import ApplyMainContainer from "./student/container/Apply/ApplyMainContainer";
<<<<<<< HEAD
import DomitoryRuleContainer from "./admin/container/DomitoryRule/DomitoryRuleContainer"
import CommonDesign from "./admin/common/commonDesign/CommonDesign"
import ShowDomitoryRuleContainer from "./admin/container/DomitoryRule/ShowDomitoryRuleContainer"
import NoticeContainer from './admin/container/Notice/NoticeContainer';
import NoticeWriteContainer from './admin/container/Notice/NoticeWriteContainer';
=======
import StudentDefaultLayout from './student/component/DefaultLayout/DefaultLayout';
import MyPageContainer from "./student/container/MyPage/MyPageContainer";
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  dmsApp(history), 
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history)
    )
  )  
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Switch>
              <Route path="/admin" component={AdminMainContainer} exact/>
<<<<<<< HEAD
              <Route render={()=>
                <CommonDesign>
                  <Switch>
                    <Route path="/admin/domitoryrule" component={DomitoryRuleContainer} exact/>
                    <Route path="/admin/domitoryrule/:postId" component={ShowDomitoryRuleContainer}/>
                    <Route path="/admin/notice" component={NoticeContainer} exact/>
                    <Route path="/admin/notice/write" component={NoticeWriteContainer} exact/>
                  </Switch>
                </CommonDesign>}/>
=======
              <Route path="/mypage" component={MyPageContainer} exact/>
              <Route render={() => 
                <Fragment>
                  <StudentDefaultLayout/>
                  <Switch>
                    <Route path="/" component={MainContainer} exact/>
                    <Route path="/apply" component={MainContainer} exact/>
                    <Route path="/post" component={MainContainer} exact/>
                    <Route path="/extra" component={MainContainer} exact/>
                  </Switch>
                </Fragment>
              }/>
              <Redirect to="/"/>
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9
              {/* <Route path="/admin" component={} exact/> */}
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
