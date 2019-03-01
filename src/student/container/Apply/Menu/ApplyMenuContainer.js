import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ApplyMenuContainer.scss';

import dmsLogo from '../../../../assets/logo/logo.png';
import ApplyMenuItem from '../../../component/Apply/menu/ApplyMenuItem';

export default class ApplyMenuContainer extends Component {
  menus = [
    { content: '연장', url: 'apply/extension', val: 'extension' },
    { content: '외출', url: 'apply/goingout', val: 'goingout' },
    { content: '잔류', url: 'apply/stay', val: 'stay' },
    { content: '기상음악', url: 'apply/music', val: 'music' },
    { content: '공지사항', url: 'guide/notice', val: 'notice' }
  ];

  onSelectMenu = menu => {
    this.setState({
      selectedMenu: menu
    });
  };

  render() {
    const { menuType, selectedMenu } = this.props;
    const menuItems = this.menus.map((content, i) => {
      if (content.val === selectedMenu)
        return (
          <ApplyMenuItem
            url={content.url}
            content={content.content}
            isSelected={'menu--selected'}
            onSelectMenu={this.onSelectMenu}
            key={i}
          />
        );
      return (
        <ApplyMenuItem
          url={content.url}
          content={content.content}
          onSelectMenu={this.onSelectMenu}
          key={i}
        />
      );
    });
    return (
      <div className='apply--menu'>
        <Link to='/'><img className='apply--menu--logo' src={dmsLogo} alt='dms 로고' /></Link>
        <div className='apply--menu--item--wrapper'>{menuItems}</div>
      </div>
    );
  }
}
