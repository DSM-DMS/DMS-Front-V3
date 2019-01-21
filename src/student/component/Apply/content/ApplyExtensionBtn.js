import React from 'react';
import './ApplyExtensionBtn.scss'

const ApplyExtensionBtn = ({content, selected, onChangeType}) => {
    return (
        <div className = {`unselectable apply--extens--btn ${selected}`} onClick = {onChangeType.bind(null, content)}>{content}</div>
    )
}

export default ApplyExtensionBtn;