import React from 'react';
import './ApplyExtensionBtn.scss'

const ApplyExtensionBtn = ({content, selected, onChangeType, val}) => {
    return (
        <div className = {`unselectable apply--extens--btn ${selected}`} onClick = {onChangeType.bind(null, val)}>{content}</div>
    )
}

export default ApplyExtensionBtn;