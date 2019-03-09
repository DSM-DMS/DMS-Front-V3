import React from 'react';

import './CommonDesign.scss'

import logo from '../../../assets/logo/logo-white.png';
import arrow from '../../../assets/icon/ic_backarrow.png';

import { Link, withRouter } from 'react-router-dom'

const CommonDesign = ({children, history}) => {
    return (
        <div className = "common-design--wrapper">
            <div className = "common-design--top--wrapper">
                <div className="admin_header--wrapper">
                    <Link to="/admin" className="admin_header--logo">
                        <img src={logo} alt="logo" className="admin_header--logo--icon"/>
                        <span className="admin_header--logo--title">DMS</span>
                    </Link>
                    <div onClick = {history.goBack} className="admin_header--goback--wrapper">
                        <img src={arrow} alt="arrow" className="admin_header--icon"/>
                        <span className="admin_header--goback--text">돌아가기</span>
                    </div>
                </div>
            </div>
            <div className = "common-design--center--wrapper">
                {children}
            </div>    
            <div className = "common-design--bottom--wrapper" />
        </div>
    );
};

export default withRouter(CommonDesign);