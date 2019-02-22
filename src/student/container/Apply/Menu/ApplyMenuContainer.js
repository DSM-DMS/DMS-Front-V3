import React, { Component } from 'react';
import './ApplyMenuContainer.scss';

import dmsLogo from '../../../../assets/logo/logo.png';
import ApplyMenuItem from '../../../component/Apply/menu/ApplyMenuItem';

export default class ApplyMenuContainer extends Component {
  menus = {
    apply: ['연장', '외출', '잔류', '기상음악']
  };
  render() {
    const { menuType, selectedMenu } = this.props;
    const menuItems = this.menus[menuType].map(content => {
      if (content === selectedMenu)
        return (
          <ApplyMenuItem content={content} isSelected={'menu--selected'} />
        );
      return <ApplyMenuItem content={content} />;
    });
    return (
      <div className='apply--menu'>
        <img className='apply--menu--logo' src={dmsLogo} alt='dms 로고' />
        <div className='apply--menu--item--wrapper'>{menuItems}</div>
      </div>
    );
  }
}
