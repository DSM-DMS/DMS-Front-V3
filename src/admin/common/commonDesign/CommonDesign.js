import React from 'react';

import './CommonDesign.scss'

import logo from '../../../assets/logo/logo-white.png';

import { Link } from 'react-router-dom'

const CommonDesign = ({children}) => {
    return (
        <div className = "common-design--wrapper">
            <div className = "common-design--top--wrapper">
                <div className="admin_header--wrapper">
                    <Link to="/admin" className="admin_header--logo">
                        <img src={logo} alt="logo" className="admin_header--logo--icon"/>
                        <span className="admin_header--logo--title">DMS</span>
                    </Link>
                </div>
            </div>
            <div className = "common-design--center--wrapper">
                {children}
            </div>    
            <div className = "common-design--bottom--wrapper" />
        </div>
    );
};

export default CommonDesign;