import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import dmsApp from "./reducers";
import './App.scss';

import MainContainer from "./student/container/Main/MainContainer";

const store = createStore(dmsApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainContainer} exact/>
            <Route path="/apply" component={MainContainer} exact/>
            <Route path="/notice" component={MainContainer} exact/>
            <Route path="/extra" component={MainContainer} exact/>
            {/* <Route path="/admin" component={} exact/> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
