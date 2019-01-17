import React, { Component } from 'react';
import './ApplyExtensionBtn.scss'

export default class ApplyExtensionBtn extends Component {
    render() {
        const {content, type} = this.props;
        return (
            <div className = {`apply--extens--btn ${type}`} >{content}</div>
        )
    }
}