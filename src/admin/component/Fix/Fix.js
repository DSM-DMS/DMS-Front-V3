import React from 'react';

import './Fix.scss'

import Woman from '../../../assets/illust/admin-1.png'

const Fix = ({fixList}) => {
    return (
        <React.Fragment>
            <div className = "fix--button--wrapper">
                <div className = "fix--button--detail fix">
                    <div className = "fix--button">시설물 고장</div>
                    <img src = {Woman} alt = "Domitory_Rule" className = "fix--button--illust"/>
                </div>
            </div>
            <div className = "fix--wrapper">
                {fixList}
            </div>
        </React.Fragment>
    );
};

export default Fix;