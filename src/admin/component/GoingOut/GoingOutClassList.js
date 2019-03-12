import React from 'react';

import './GoingOutClassList.scss'

const GoingOutClassList = ({children, onSelect}) => {
    return (
        <div onClick = {onSelect} className = "admin-goingout--list--wrapper">
            {children}
        </div>
    );
};

export default GoingOutClassList;