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
    
    window.addEventListener("scroll", throttle(1500,() => {
      console.log(this.state.scrollScope);

      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > this.state.lastScrollTop) {
        this.setState((prevState) => {
          return {
            scrollScope: prevState.scrollScope + 1
          }
        })
        document
        .querySelector(this.idList[this.state.scrollScope])
        .scrollIntoView({ behavior: "smooth" });
      } else if (scrolled < this.state.lastScrollTop){
        this.setState((prevState) => {
          return {
            scrollScope: prevState.scrollScope + 1
          }
        })
        document
        .querySelector(this.idList[this.state.scrollScope])
      } else {
        console.warn('error');
      }
      this.setState({
        lastScrollTop: scrolled <= 0 ? 0 : this.idList[this.state.scrollScope]
      })
    }));


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
