import React, { Component } from 'react';

import './GuideMenuContainer.scss';
import MenuContainer from '../../Apply/Menu/ApplyMenuContainer';

export default class GuideMenuContainer extends Component {
  render() {
    const { selectedMenu } = this.props;
    return (
      <div>
        <MenuContainer menuType='guide' selectedMenu={selectedMenu} />
      </div>
    );
  }
}
