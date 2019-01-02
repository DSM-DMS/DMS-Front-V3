import React, { Component } from "react";
import { connect } from 'react-redux';
import { setScroll } from '../../../actions';

import MealContainer from "./Meal/MealContainer";
import ApplyContainer from "./Apply/ApplyContainer";
import PostContainer from "./Post/PostContainer";
import ExtraContainer from './Extra/ExtraContainer';
import FooterContainer from './Footer/FooterContainer';

import './MainContainer.scss';

let throttleBool;
class MainContainer extends Component {
  idList = ["meal", "apply", "post", "extra", "footer"];

  pageList = {
    meal: 0,
    apply: 1,
    post: 2,
    extra: 3
  }

  scrollScope = 0;

  scrolling = (e) => {
    const upDown = e.wheelDelta || -e.detail
    if(upDown < 0) {
      if(this.scrollScope !== 4){
        console.log("down")
        this.props.setScroll(this.idList[++this.scrollScope])
        console.log("down2")
      }
    } else {
      if(this.scrollScope !== 0){
        console.log("up")
        this.props.setScroll(this.idList[--this.scrollScope])
        console.log("up2")
      }
    }
  }

  throttle(e, func, wait) {
    return () => {
      if(!throttleBool) {
        throttleBool = true;
        func(e)
        setTimeout(()=>{
          throttleBool = false;
        }, wait)
      }
    }
  }

  componentDidMount() {
    const { location } = this.props;

    document.addEventListener("DOMMouseScroll", (e) => {
      this.throttle(e, this.scrolling, 700)()
    })
    document.addEventListener("mousewheel", (e) => {
      this.throttle(e, this.scrolling, 700)()
    })
    
    if (location.pathname !== "/") {
      const place = location.pathname.replace("/", "");
      // console.log(location.pathname.replace("/", ""));
      this.props.setScroll(place);
      
      this.scrollScope = this.pageList[place];
    }
    console.log(this.scrollScope)
  }

  render() {
    const { scroll } = this.props;
    return (
      <div style={{ width: window.screen.width}} className={'scroll--' + scroll.get('scroll')} id="main">
        <MealContainer />
        <ApplyContainer />
        <PostContainer />
        <ExtraContainer />
        <FooterContainer />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    scroll: state.scroll
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setScroll: (value) => dispatch(setScroll(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
