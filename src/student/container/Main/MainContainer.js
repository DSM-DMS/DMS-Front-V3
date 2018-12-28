import React, { Component } from "react";
import MealContainer from "./Meal/MealContainer";
import ApplyContainer from "./Apply/ApplyContainer";
import NoticeContainer from "./Notice/NoticeContainer";

import { throttle } from 'throttle-debounce';

class MainContainer extends Component {
  idList = ["#meal", "#apply", "#notice", "#extra"];

  state ={
    lastScrollTop: 0,
    scrollScope: 0
  }

  componentDidMount() {
    const { location } = this.props;
    
    if (location.pathname !== "/") {
      document
        .querySelector(location.pathname.replace("/", "#"))
        .scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    return (
      <div style={{ width: window.screen.width }} id="main">
        <MealContainer />
        <ApplyContainer />
        <NoticeContainer />
      </div>
    );
  }
}

export default MainContainer;
