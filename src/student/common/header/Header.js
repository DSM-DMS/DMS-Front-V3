import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../../assets/logo/logo-white.png';

import './Header.scss';

const Header = ({buttonList}) => {
    return (
        <div className="header--wrapper">
            <Link to="/" className="header--logo">
                <img src={logo} alt="logo" className="header--logo--icon"/>
                <span className="header--logo--title">DMS</span>
            </Link>
            <div className="header--button--list">
                {buttonList}
                <button className="header--button">
                    로그인  
                </button>
            </div>
        </div>
    );
};

export default Header;