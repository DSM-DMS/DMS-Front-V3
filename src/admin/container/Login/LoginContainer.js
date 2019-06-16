import React, { Component, Fragment } from 'react';
import axios from 'axios'

import Login from '../../component/Login/Login'
import { setCookie, removeCookie } from '../../../lib/cookie.js'
import Loading from '../../common/Loading/Loading'

import { connect } from 'react-redux'

import { login } from '../../../actions'

class LoginContainer extends Component {
    state = {
        id : '',
        password : '',
        loading : false
    }

    componentDidMount = () => {
        removeCookie('JWT')
        this.props.login(false)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleLogin = () => {
        const { id, password } = this.state;
        if((id || password) === "") {
            throw alert("공란이 존재합니다")
        }
        this.setState({
            loading : true
        })
        axios.post('https://admin-api.dms.istruly.sexy/auth', {
            id : id,
            password : password,
        })
        .then(response => {
            const { data } = response;
            const jwttoken = data.accessToken
            const reftoken = data.refreshToken
            console.log(data)
            alert('로그인에 성공했습니다')
            setCookie('JWT', jwttoken)
            setCookie('RFT', reftoken)
            this.setState({
                loading : false
            })
            this.props.login(true)
            this.props.history.push('/admin')
        })
        .catch (err => {
            alert('로그인에 실패했습니다')
            this.setState({
                loading : false
            })
        })
    }

    render() {
        const {id, password, loading} = this.state;
        return (
            <Fragment>
                {
                    loading && <Loading />
                }
                <Login handleChange = {this.handleChange} handleLogin = {this.handleLogin} id = {id} password = {password}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login : (bool) => dispatch(login(bool)) 
})

export default connect(null, mapDispatchToProps)(LoginContainer);