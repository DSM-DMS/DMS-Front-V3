import React from 'react';
import { Link } from "react-router-dom";
import './ApplyMenuBtn.scss';

const ApplyMenuBtn = ({ iconSrc, title, url, selectedClass }) => {
    return (
        <div className = {`apply--detail--btn ${selectedClass}`}>
            <img className="apply--detail--btn--icon" src={iconSrc} alt="icon"/>
            <Link className="apply--detail--btn--title" to={`/apply/${url}`}>{title}</Link>
        </div>
    )
}

export default ApplyMenuBtn;