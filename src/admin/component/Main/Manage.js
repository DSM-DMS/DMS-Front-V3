import React from 'react';

import './Manage.scss'

import Setting from '../../../assets/icon/ic_gears.png'

const Manage = ({cardList}) => {
    return (
        <div className = "manage--wrapper">
            <div className = "manage--inner--wrapper">
                <div className = "manage--logo--wrapper">
                    <img src = {Setting} alt = "gears" className = "manage--logo--icon"/>
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