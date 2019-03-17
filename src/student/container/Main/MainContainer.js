import React, { Component } from 'react';

import MealContainer from './Meal/MealContainer';
import ApplyContainer from './Apply/ApplyContainer';
import GuideContainer from './Guide/GuideContainer';
import ExtraContainer from './Extra/ExtraContainer';
import FooterContainer from './Footer/FooterContainer';

class MainContainer extends Component {
  componentDidMount() {
    const { location } = this.props;

    if (location.pathname !== '/') {
      document
        .querySelector(location.pathname.replace('/', '#'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <>
        <MealContainer />
        <ApplyContainer />
        <GuideContainer />
        <ExtraContainer />
        <FooterContainer />
      </>
    );
  }
}

export default MainContainer;
