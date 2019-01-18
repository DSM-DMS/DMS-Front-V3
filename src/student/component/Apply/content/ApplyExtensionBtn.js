import React, { Component } from 'react';
import './ApplyExtensionBtn.scss'

export default class ApplyExtensionBtn extends Component {
    render() {
        const {content, selected, onChangeType} = this.props;
        return (
            <div className = {`apply--extens--btn ${selected}`} onClick = {onChangeType.bind(null, content)}>{content}</div>
        )
    }
}