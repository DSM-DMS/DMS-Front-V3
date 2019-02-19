import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './ApplyTitle.scss'
import DMSLogo from '../../../assets/logo/logo-white.png'

export default class ApplyTitle extends Component {
    render() {
        return (
            <Link className='apply--main--title--link' to = '/'>
                <div className="apply--main--title--wrapper">
                    <img className="apply--main--title--img" alt="DMS logo" src={DMSLogo}></img>
                    <span className="apply--main--title">DMS</span>
                </div>
            </Link>
        )
    }
}