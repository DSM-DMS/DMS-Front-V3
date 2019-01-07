import React from 'react';
import logoImg from '../../../assets/logo/logo.png';

import './Login.scss';

const Login = () => {
    return (
        <div className="login--modal--wrapper">
            <div className="login--modal--logo--wrapper">
                <img src={logoImg} alt="" className="login--modal--logo"/>
                <span className="login--modal--logo--title">로그인</span>
            </div>
        </div>
    );
};

export default Login;