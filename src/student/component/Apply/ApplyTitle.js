import React, { Component } from 'react';

import './ApplyTitle.scss'
import DMSLogo from '../../../assets/logo/logo-white.png'

export default class ApplyTitle extends Component {
    render() {
        return (
            <div className="apply--main--title--wrapper">
                <img className="apply--main--title--img" alt="DMS logo" src={DMSLogo}></img>
                <span className="apply--main--title">DMS</span>
            </div>
        )
    }
}