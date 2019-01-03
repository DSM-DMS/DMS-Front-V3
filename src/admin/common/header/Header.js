import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../../assets/logo/logo-white.png';

import './Header.scss';

const Header = ({buttonList}) => {
    return (
        <div className="admin_header--wrapper">
            <Link to="/admin" className="admin_header--logo">
                <img src={logo} alt="logo" className="admin_header--logo--icon"/>
                <span className="admin_header--logo--title">DMS</span>
            </Link>
            <div className="admin_header--button--list">
                {buttonList}
            </div>
        </div>
    );
};

export default Header;