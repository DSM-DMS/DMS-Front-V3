import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import dmsApp from "./reducers";
import './App.scss';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import MainContainer from "./student/container/Main/MainContainer";
import AdminMainContainer from "./admin/container/Main/AdminMainContainer";
import ApplyMainContainer from "./student/container/Apply/ApplyMainContainer";

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
              <Route path="/" component={MainContainer} exact/>
              <Route path="/apply" component={MainContainer} exact/>
              <Route path="/apply/extension" component={ApplyMainContainer} />
              <Route path="/post" component={MainContainer} exact/>
              <Route path="/extra" component={MainContainer} exact/>
              <Route path="/admin" component={AdminMainContainer} exact/>
              {/* <Route path="/admin" component={} exact/> */}
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
