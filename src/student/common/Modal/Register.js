import React, { Component } from 'react';

import './Register.scss'

class Register extends Component {
    state = {
        checkCode: '',
        id: '',
        pw: '',
        pwCheck: ''
    }

    checkCodeHandler = (e) => {
        this.setState({
            checkCode: e.target.value
        })
    }

    idHandler = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    pwHandler = (e) => {
        this.setState({
            pw: e.target.value
        })
    }

    pwCheckHandler = (e) => {
        this.setState({
            pwCheck: e.target.value
        })
    }

    render() {
        return (
            <div className="register--wrapper">
                <input type="text" className="modal--input" placeholder="확인 코드" onChange={this.checkCodeHandler}/>
                <input type="text" className="modal--input" placeholder="아이디" onChange={this.idHandler}/>
                <input type="password" className="modal--input" placeholder="비밀번호" onChange={this.pwHandler}/>
                <input type="password" className="modal--input" placeholder="비밀번호 확인" onChange={this.pwCheckHandler}/>
                <button className="modal--submit">회원가입</button>
            </div>
        );
    }
}

export default Register;