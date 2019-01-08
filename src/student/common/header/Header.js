import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../../assets/logo/logo-white.png';

import './Header.scss';

const Header = ({buttonList, variableButton}) => {
    return (
        <div className="header--wrapper">
            <Link to="/" className="header--logo">
                <img src={logo} alt="logo" className="header--logo--icon"/>
                <span className="header--logo--title">DMS</span>
            </Link>
            <div className="header--button--list">
                {buttonList}
                {variableButton()}
            </div>
        </div>
    );
};

export default Header;