import React, {Fragment} from 'react';

import Woman from '../../../assets/illust/admin-1.png'

import './Music.scss'

const Music = ({list}) => {
    return (
        <Fragment>
            <div className = "music--button--wrapper">
                <div className = "music--button--detail music">
                    <div className = "music--button">기상 음악 신청</div>
                    <img src = {Woman} alt = "music" className = "music--button--illust"/>
                </div>
            </div>
            <div className = "music--wrapper">
                <div className = "music--header--wrapper">
                    <div className = "music--header--content content--day">요일</div>
                    <div className = "music--header--content content--title">제목</div>
                    <div className = "music--header--content content--artist">아티스트</div>
                </div>
                <div className = "music--content--wrapper">
                    {list}
                </div>
            </div>
        </Fragment>
    );
};

export default Music;