import React, { Component } from 'react';
import './ApplyExtensionBtn.scss'

export default class ApplyExtensionBtn extends Component {
    render() {
        const {content, seleted} = this.props;
        return (
            <div className = {`apply--extens--btn ${seleted}`} >{content}</div>
        )
    }
}