import React, { Component } from 'react';

import "./Login.scss";

class Login extends Component {
    state = {
        id: '',
        pw: '',
        checkbox: false
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

    checkboxHandler = (e) => {
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    render() {
        return (
            <div className="login--wrapper">
                <input type="text" placeholder="아이디" className="login--input" onChange={this.idHandler} value={this.state.id}/>
                <input type="password" placeholder="비밀번호" className="login--input" onChange={this.pwHandler} value={this.state.pw}/>
                <button className="login--submit">로그인</button>
                <div className="login--bottom--wrapper">
                    <span className="login--checkbox--wrapper">
                        <input type="checkbox" className="login--checkbox" id="login--checkbox" onChange={this.checkboxHandler} value={this.state.checkbox}/>
                        <label htmlFor="login--checkbox" className="login--checkbox--label">비밀번호 저장</label>
                    </span>
                    <span className="login--forgot">
                        비밀번호를 잊으셨나요 ?
                    </span>
                </div>
            </div>
        );
    }
}

export default Login;