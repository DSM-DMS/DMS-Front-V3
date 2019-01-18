import React from 'react';
import './ApplyAcceptBtn.scss';

const ApplyAcceptBtn = ({type, title}) => {
    return (
        <div className = {`apply--extension--btn ${type}`}> {title} </div>
    )
}

export default ApplyAcceptBtn