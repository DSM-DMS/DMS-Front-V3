import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSection } from '../../../actions';
// import throttle from 'lodash.throttle';

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
    const { history } = this.props;
    const upDown = e.wheelDelta || -e.detail
    let nowScroll = this.props.section.currentSection;
    if(upDown < 0) {
      switch(nowScroll){
        case 'meal':
          history.push('apply');
          this.props.setSection('apply');
          break;
        case 'apply':
          history.push('post');
          this.props.setSection('post');
          break;
        case 'post':
          history.push('extra');
          this.props.setSection('extra');
          break;
        case 'extra':
          this.props.setSection('footer');
          break;
        default:
          break;
      }
    } else {
      switch(nowScroll){
        case 'apply':
          history.push('/');
          this.props.setSection('meal');
          break;
        case 'post':          
          history.push('apply');
          this.props.setSection('apply');
          break;
        case 'extra':
          history.push('post');
          this.props.setSection('post');
          break;
        case 'footer':
          history.push('extra');
          this.props.setSection('extra');
          break;
        default:
          break;
      }
    }
  }

  throttle = (e, func, wait) => {
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
    const mainPage = document.getElementById("main");
    mainPage.addEventListener("DOMMouseScroll", 
    (e) => {
      this.throttle(e, this.scrolling, 700)()
    })
    mainPage.addEventListener("mousewheel", 
    (e) => {
      this.throttle(e, this.scrolling, 700)()
      
    })

    if (location.pathname !== "/") {
      const place = location.pathname.replace("/", "");
      this.props.setSection(place);
    }
  }
  

  render() {
    const { section } = this.props;
    return (
      <div style={{ width: window.screen.width}} className={`scroll--${section.currentSection}` } id="main">
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
