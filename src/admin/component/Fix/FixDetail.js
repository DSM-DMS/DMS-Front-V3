import React from 'react';

import Woman from '../../../assets/illust/admin-1.png'

import './FixDetail.scss'

const ShowDomitoryRule = ({match, data}) => {
    return (
        <React.Fragment>
            <div className = "fix--button--wrapper">
                <div className = "fix--button--detail fix">
                    <div className = "fix--button">시설물 고장</div>
                    <img src = {Woman} alt = "fix" className = "fix--button--illust"/>
                </div>
            </div>
            <div className = "fix--detail--wrapper">
                <div className = "fix--detail--header--wrapper">
                    상세 설명
                </div>
                <div className = "fix--detail--content--wrapper">
                    <div className = "fix--detail--content--prev"/>
                        <div className = "fix--detail--content--main--wrapper">
                                <div className = "fix--detail--content--main--header--wrapper">
                                    <div className = "fix--detail--content--main--header--name">
                                        김용현
                                    </div>
                                </div>
                                <div className = "fix--detail--content--main--detail--wrapper">
                                    문이 안닫힘
                                </div>
                                <div className = "fix--detail--content--main--footer--wrapper">
                                    321호
                                </div>
                            </div>
                        </div>
                    <div className = "fix--detail--content--next"/>
                </div>
        </React.Fragment>
    );
};

export default ShowDomitoryRule;