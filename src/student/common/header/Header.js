import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo/logo-white.png';
import logogreen from '../../../assets/logo/logo.png';

import './Header.scss';

const Header = ({ buttonList, variableButton, developers }) => {
  return (
    <header
      className={`${!!developers ? 'developers--page' : ''} header--wrapper`}
    >
      <Link to="/" className="header--logo">
        <img
          src={!!developers ? logogreen : logo}
          alt="logo"
          className="header--logo--icon"
        />
        <span className="header--logo--title">DMS</span>
      </Link>
      <nav className="header--button--list">
        {buttonList}
        {variableButton}
      </nav>
    </header>
  );
};

export default Header;
