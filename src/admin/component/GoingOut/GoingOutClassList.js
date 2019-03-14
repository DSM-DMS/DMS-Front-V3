import React from 'react';

import './GoingOutClassList.scss'

const GoingOutClassList = ({children, data, HandleSelect}) => {
    return (
        <div onClick = {() => {HandleSelect(data.kind)}} className = "admin-goingout--list--wrapper">
            {children}
        </div>
    );
};

export default GoingOutClassList;