import React, { Component } from 'react';

import './ApplyContentMenuContainer.scss';

import ApplyContentMenuItem from '../../../component/Apply/Utils/ApplyContentMenuItem';
import addIcon from '../../../../assets/icon/ic_goingout_add.png';

export default class ApplyContentMenuContainer extends Component {
  render() {
    const {
      menuTitle,
      menuList,
      onSelectMenu,
      selectedMenu,
      onAddGoingoutApply
    } = this.props;
    let menuItems;
    if (menuList.length > 0) {
      menuItems = menuList.map((item, i) =>
        selectedMenu === item.val ? (
          <ApplyContentMenuItem
            isSelected="selected"
            content={item}
            val={item.val}
            onClickMenu={onSelectMenu}
            available={item.available === false ? 'disable' : undefined}
            key={i}
          />
        ) : (
          <ApplyContentMenuItem
            content={item}
            val={item.val}
            onClickMenu={onSelectMenu}
            available={item.available === false ? 'disable' : undefined}
            key={i}
          />
        )
      );
    } else {
      menuItems = (
        <div
          className="apply--content--menu--item apply--content--menu--item--add"
          onClick={onAddGoingoutApply}
        >
          <img src={addIcon} alt="add goingout icon" />
        </div>
      );
    }

    return (
      <div className="apply--content--menu--wrapper">
        <p className="apply--content--menu--title">{menuTitle}</p>
        {menuItems}
      </div>
    );
  }
}
