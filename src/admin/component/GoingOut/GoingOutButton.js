import React from 'react';

import './GoingOutButton.scss'

const GoingOutButton = ({children, data, onToggle}) => {
    return (
        <div onClick = {() => {onToggle(data.id)}} className = "admin-goingout--button--wrapper">
            <span className = "admin-goingout--button--text">
                {children}
            </span>
            <input id = "goingout-button" className = "admin-goingout--button" type = "checkbox" checked = {data.check} readOnly/>
            <div className = "admin-goingout--buttons">
                <div className = "admin-goingout-buttons-inner"/>
            </div>
        </div>
    );
};

export default GoingOutButton;