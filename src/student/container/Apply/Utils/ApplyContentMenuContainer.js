import React, { Component } from 'react';

import './ApplyContentMenuContainer.scss';

import ApplyContentMenuItem from '../../../component/Apply/Utils/ApplyContentMenuItem';

export default class ApplyContentMenuContainer extends Component {
  state = {
    selected: 0
  };

  onClickMenu = index => {
    this.setState({
      selected: index
    });
  };

  render() {
    const { menuTitle, menuList } = this.props;
    const { selected } = this.state;
    const menuItems = menuList.map((item, i) =>
      selected === i ? (
        <ApplyContentMenuItem isSelected='selected' content={item} val={i} onClickMenu={this.onClickMenu} key={i} />
      ) : (
        <ApplyContentMenuItem content={item} val={i} onClickMenu={this.onClickMenu} key={i}/>
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
