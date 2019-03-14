import React from 'react';

import './GoingOutPageList.scss'

const GoingOutPageList = ({onPageMove, numbering, children}) => {
    return (
        <span onClick = {() => {onPageMove(numbering)}} className = "admin-goingout--pagelist">
            {children}
        </span>
    );
};

export default GoingOutPageList;