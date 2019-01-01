import React, { Component } from "react";
import MealContainer from "./Meal/MealContainer";
import ApplyContainer from "./Apply/ApplyContainer";
import PostContainer from "./Post/PostContainer";
import ExtraContainer from './Extra/ExtraContainer';
import FooterContainer from './Footer/FooterContainer';

class MainContainer extends Component {
  idList = ["#meal", "#apply", "#post", "#extra"];

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
        <PostContainer />
        <ExtraContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default MainContainer;
