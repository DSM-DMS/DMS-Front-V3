import React from 'react';

import './GoingOut.scss'

import Woman from '../../../assets/illust/admin-1.png'

const GoingOut = ({goingoutList}) => {
    return (
        <React.Fragment>
            <div className = "goingout--button--wrapper">
                <div className = "goingout--button--detail goingout">
                    <div className = "goingout--button">외출자관리</div>
                    <img src = {Woman} alt = "goingout" className = "goingout--button--illust"/>
                </div>
            </div>
            <div className = "goingout--wrapper">
                <div className = "goingout--header--wrapper">
                    <div className = "goingout--header--content content--number">
                        번호
                    </div>
                    <div className = "goingout--header--content content--name">
                        이름
                    </div>
                    <div className = "goingout--header--content content--schoolnumber">
                        학번
                    </div>
                    <div className = "goingout--header--content content--time">
                        외출시간
                    </div>
                    <div className = "goingout--header--content content--check">
                        확인여부
                    </div>
                    <div className = "goingout--header--content content--delete">
                        삭제
                    </div>
                </div>
                <div className = "goingout--content--wrapper">
                      
                </div>
            </div>
        </React.Fragment>
    );
};

export default GoingOut;