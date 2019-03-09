import React, { Component } from "react";
import MainContainer from "./MainContainer";
import ManageContainer from "./ManageContainer";

import { connect } from 'react-redux'

class AdminMainContainer extends Component {
  componentDidMount = () => {
    if(this.props.login.isLogin === false) {
      alert('로그인이 필요합니다')
      this.props.history.push('/admin/login')
    }
  }

  render() {
    return (
      <div style={{ width: window.screen.width }} id="main">
        <MainContainer />
        <ManageContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login : state.adminLogin
})

export default connect(mapStateToProps)(AdminMainContainer);