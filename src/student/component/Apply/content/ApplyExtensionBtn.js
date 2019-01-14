import React, { Component } from 'react';
import './ApplyExtensionBtn.scss'

export default class ApplyExtensionBtn extends Component {
    render() {
        const content = this.props.content;
        return (
            <div className = 'apply--extens--btn'>{content}</div>
        )
    }
}