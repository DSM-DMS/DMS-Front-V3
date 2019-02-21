import React, { Component } from 'react';
import './ApplyMenuContainer.scss';

import dmsLogo from '../../../../assets/logo/logo.png';

export default class ApplyMenuContainer extends Component {
  render() {
    const { menuType, selectedMenu } = this.props;
    return (
      <div className='apply--menu'>
        <img src={dmsLogo} alt='dms 로고'/>
      </div>
    );
  }
}
