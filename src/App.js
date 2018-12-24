import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import dmsApp from "./reducers";
import './App.css';

const store = createStore(dmsApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component=""></Route>
            <Route path="/admin" component=""></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
