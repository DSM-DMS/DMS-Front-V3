import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSection } from '../../../actions';

import MealContainer from "./Meal/MealContainer";
import ApplyContainer from "./Apply/ApplyContainer";
import PostContainer from "./Post/PostContainer";
import ExtraContainer from './Extra/ExtraContainer';
import FooterContainer from './Footer/FooterContainer';

import './MainContainer.scss';

let throttleBool;
class MainContainer extends Component {
  idList = ["meal", "apply", "post", "extra", "footer"];

  scrolling = (e) => {
    const upDown = e.wheelDelta || -e.detail
    let nowScroll = this.props.section.currentSection;
    console.log('now : ' + nowScroll);
    if(upDown < 0) {
      switch(nowScroll){
        case 'meal':
          this.props.setSection('apply');
          break;
        case 'apply':
          console.log("apply");
          this.props.setSection('post');
          break;
        case 'post':
          console.log("fuck !");
          this.props.setSection('extra');
          break;
        case 'extra':
          console.log('extra');
          this.props.setSection('footer');
          break;
        default:
          break;
      }
    } else {
      switch(nowScroll){
        case 'apply':
          this.props.setSection('meal');
          break;
        case 'post':
          this.props.setSection('apply');
          break;
        case 'extra':
          this.props.setSection('post');
          break;
        case 'footer':
          this.props.setSection('extra');
          break;
        default:
          break;
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
    console.log('123');
    const { location } = this.props;

    document.addEventListener("DOMMouseScroll", (e) => {
      this.throttle(e, this.scrolling, 700)()
    })
    document.addEventListener("mousewheel", (e) => {
      this.throttle(e, this.scrolling, 700)()
    })
    
    if (location.pathname !== "/") {
      const place = location.pathname.replace("/", "");
      console.log(location.pathname.replace("/", ""));
      this.props.setScroll(place);
    }
  }
  
  componentWillUnmount() {
    document.removeEventListener()
  }

  render() {
    const { section } = this.props;
    return (
      <div style={{ width: window.screen.width}} className={`scroll--${section.currentSection}`} id="main">
        <MealContainer />
        <ApplyContainer />
        <PostContainer />
        <ExtraContainer />
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.section
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSection: (value) => dispatch(setSection(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
