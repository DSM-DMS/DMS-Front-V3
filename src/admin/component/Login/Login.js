import React from 'react';

import logoWhite from '../../../assets/logo/logo-white.png'
import logo from '../../../assets/logo/logo@2x.png'
import mobile from '../../../assets/illust/dms-mobile.png'

import './Login.scss'

const Login = ({handleLogin, handleChange}) => {
    return (
        <div className="admin-login--wrapper">
            <div className = "admin-login--header--wrapper">
                <div className = "admin-login--header--icon--wrapper">
                    <img alt = "icon" className = "admin-login--header--icon" src = {logoWhite}/>
                    <span className = "admin-login--header--text">
                        DMS
                    </span>
                </div>
            </div>
            <div className = "admin-login--content--wrapper">
                <img src = {mobile} className = "admin-login--content--image" alt = "awesome mobile ver."/>
                <div className = "admin-login--content--card--wrapper">
                    <div className = "admin-login--content--card--logo--wrapper">
                        <img src = {logo} alt = "logo" className = "admin-login--content--card--logo--image"/>
                        <span className = "admin-login--content--card--logo--text">
                            로그인
                        </span>
                    </div>
                    <div className = "admin-login--content--card--input--wrapper">
                        <input onKeyPress = {(e) => {
                            if(e.key === 'Enter')
                            handleLogin()
                        }} onChange = {handleChange} name = "id" className = "admin-login--content--card--input" placeholder = "아이디"/>
                        <input onKeyPress = {(e) => {
                            if(e.key === 'Enter')
                            handleLogin()
                        }} onChange = {handleChange} name = "password" className = "admin-login--content--card--input" type = "password" placeholder = "비밀번호" />
                        <button onClick = {handleLogin} className = "admin-login--content--card--button">로그인</button>
                    </div>
                    <div className = "admin-login--content--card--footer--wrapper">
                        <span className = "admin-login--content--card--footer--text">
                            © Team DMS - Dormitory Management System
                        </span>
                    </div>
                </div>          
            </div>
        </div>
    );
};

export default Login;