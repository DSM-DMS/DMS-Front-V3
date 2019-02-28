import React, { Component } from 'react';

import './ApplyContentMenuContainer.scss';

import ApplyContentMenuItem from '../../../component/Apply/Utils/ApplyContentMenuItem';

export default class ApplyContentMenuContainer extends Component {

  render() {
    const { menuTitle, menuList, onSelectMenu, selectedMenu } = this.props;
    const menuItems = menuList.map((item, i) =>
      selectedMenu === i ? (
        <ApplyContentMenuItem
          isSelected='selected'
          content={item}
          val={i}
          onClickMenu={onSelectMenu}
          available={item.available === false ? 'disable' : undefined}
          key={i}
        />
      ) : (
        <ApplyContentMenuItem
          content={item}
          val={i}
          onClickMenu={onSelectMenu}
          available={item.available === false ? 'disable' : undefined}
          key={i}
        />
      )
    );

    return (
      <div className='apply--content--menu--wrapper'>
        <p className='apply--content--menu--title'>{menuTitle}</p>
        {menuItems}
      </div>
    );
  }
}
