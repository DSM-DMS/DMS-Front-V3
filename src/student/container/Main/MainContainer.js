import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSection } from '../../../actions';

import MealContainer from './Meal/MealContainer';
import ApplyContainer from './Apply/ApplyContainer';
import PostContainer from './Post/PostContainer';
import ExtraContainer from './Extra/ExtraContainer';
import FooterContainer from './Footer/FooterContainer';

import './MainContainer.scss';

let throttleBool;
class MainContainer extends Component {
  scrolling = e => {
    const { history } = this.props;
    const upDown = e.wheelDelta || -e.detail;
    let nowScroll = this.props.section.currentSection;
    if (upDown < 0) {
      switch (nowScroll) {
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
      switch (nowScroll) {
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
  };

  throttle = (e, func, wait) => {
    return () => {
      if (!throttleBool) {
        console.log(23);
        throttleBool = true;
        func(e);
        setTimeout(() => {
          throttleBool = false;
          console.log(13);
        }, wait);
      }
    };
  };

  componentDidMount() {
    const { location } = this.props;
    const mainPage = document.getElementById('main');
    let agent = navigator.userAgent.toLowerCase();

    if (
      !(
        (navigator.appName === 'Netscape' &&
          navigator.userAgent.search('Trident') !== -1) ||
        agent.indexOf('msie') !== -1
      )
    ) {
      mainPage.addEventListener('DOMMouseScroll', e => {
        this.throttle(e, this.scrolling, 750)();
      });
      mainPage.addEventListener('mousewheel', e => {
        this.throttle(e, this.scrolling, 750)();
      });
    }

    if (location.pathname !== '/') {
      const place = location.pathname.replace('/', '');
      this.props.setSection(place);
    }
  }

  render() {
    const { section } = this.props;
    return (
      <div
        className={
          !(
            (navigator.appName === 'Netscape' &&
              navigator.userAgent.search('Trident') !== -1) ||
            navigator.userAgent.toLowerCase().indexOf('msie') !== -1
          )
            ? `scroll--${section.currentSection}`
            : 'main--ie'
        }
        id="main"
      >
        <MealContainer />
        <ApplyContainer />
        <PostContainer />
        <ExtraContainer />
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.section,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSection: value => dispatch(setSection(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
