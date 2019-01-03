import React, { Component } from "react";
import MainContainer from "./MainContainer";

class AdminMainContainer extends Component {
  render() {
    return (
      <div style={{ width: window.screen.width }} id="main">
        <MainContainer />
      </div>
    );
  }
}

export default AdminMainContainer;