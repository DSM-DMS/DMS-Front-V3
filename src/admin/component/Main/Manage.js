import React from 'react';

import './Manage.scss'


const Manage = ({cardList}) => {
    return (
        <div className = "manage--wrapper">
            <div className = "manage--inner--wrapper">
                <div className = "manage--logo--wrapper">
                    <img className = "manage--logo--icon"/>
                    <div className = "manage--logo--text">
                        Management
                    </div>
                </div>
                <div className = "manage--card--wrapper">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Manage;