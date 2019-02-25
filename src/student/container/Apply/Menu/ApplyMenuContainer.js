import React, { Component } from 'react';
import './ApplyMenuContainer.scss';

import dmsLogo from '../../../../assets/logo/logo.png';
import ApplyMenuItem from '../../../component/Apply/menu/ApplyMenuItem';

export default class ApplyMenuContainer extends Component {
  menus = {
    apply: [
      { content: '연장', url: 'extension' },
      { content: '외출', url: 'goingout' },
      { content: '잔류', url: 'stay' },
      { content: '기상음악', url: 'music' }
    ]
  };

  onSelectMenu = menu => {
    this.setState({
      selectedMenu: menu
    });
  };

  render() {
    const { menuType, selectedMenu } = this.props;
    const menuItems = this.menus[menuType].map(content => {
      if (content.url === selectedMenu)
        return (
          <ApplyMenuItem
            baseUrl='apply'
            url={content.url}
            content={content.content}
            isSelected={'menu--selected'}
            onSelectMenu={this.onSelectMenu}
          />
        );
      return (
        <ApplyMenuItem
          baseUrl='apply'
          url={content.url}
          content={content.content}
          onSelectMenu={this.onSelectMenu}
        />
      );
    });
    return (
      <div className='apply--menu'>
        <img className='apply--menu--logo' src={dmsLogo} alt='dms 로고' />
        <div className='apply--menu--item--wrapper'>{menuItems}</div>
      </div>
    );
  }
}
