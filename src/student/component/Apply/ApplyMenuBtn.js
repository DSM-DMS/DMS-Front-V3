import React from 'react';
import './ApplyMenuBtn.scss';

const ApplyMenuBtn = ({ iconSrc, title }) => {
    return (
        <div className="apply--detail--btn">
            <img className="apply--detail--btn--icon" src={iconSrc} alt="icon"/>
            <span className="apply--detail--btn--title">{title}</span>
        </div>
    )
}

export default ApplyMenuBtn;