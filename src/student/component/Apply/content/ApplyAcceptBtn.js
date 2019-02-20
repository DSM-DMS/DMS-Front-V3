import React from 'react';
import './ApplyAcceptBtn.scss';

const ApplyAcceptBtn = ({type, title, onClickFunc}) => {
    return (
        <div className = {`unselectable apply--extension--btn ${type}`} onClick={onClickFunc}> {title} </div>
    )
}

export default ApplyAcceptBtn