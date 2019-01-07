import React, { Component } from "react";
import MainContainer from "./MainContainer";
import ManageContainer from "./ManageContainer";

class AdminMainContainer extends Component {
  render() {
    return (
      <div style={{ width: window.screen.width }} id="main">
        <MainContainer />
        <ManageContainer />
      </div>
    );
  }
}

export default AdminMainContainer;