import React from 'react';

import Woman from '../../../assets/illust/admin-1.png'

import './Music.scss'

const Music = ({day, list, dateIndex, onIndexChange}) => {
    return (
        <React.Fragment>
            <div className = "music--button--wrapper">
                <div className = "music--button--detail music">
                    <div className = "music--button">기상 음악 신청</div>
                    <img src = {Woman} alt = "music" className = "music--button--illust"/>
                </div>
            </div>
            <div className = "music--detail--wrapper">
                <div className = "music--detail--header--wrapper">
                    {day}
                </div>
                <div className = "music--detail--content--wrapper">
                    {
                        !(dateIndex === 0) &&
                    <div onClick = {() => onIndexChange('prev')} className = "music--detail--content--prev"/>
                    }
                        <div className = "music--detail--content--main--wrapper">
                                <div className = "music--detail--content--main--detail--wrapper apply">
                                    <div className = "music--detail--content--main--detail">
                                        신청
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content musicName">
                                            { list[0].musicName }
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                            { list[0].singer }
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                            { list[0].studentName }
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content musicName">
                                        { list[1].musicName }
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        { list[1].singer }
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        { list[1].studentName }
                                        </div>
                                    </div>
                                </div>
                                <div className = "music--detail--content--main--detail--wrapper second">
                                    <div className = "music--detail--content--main--detail">
                                        후보
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content musicName">
                                        { list[2].musicName }
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        { list[2].singer }
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        { list[2].studentName }
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content musicName">
                                        { list[3].musicName }
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        { list[3].singer }
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        { list[3].studentName }
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content musicName">
                                        { list[4].musicName }
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        { list[4].singer }
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        { list[4].studentName }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                !(dateIndex === 4) &&
                            <div onClick = {() => onIndexChange('next')} className = "music--detail--content--next"/>
                            }
                        </div>
                </div>
        </React.Fragment>
    );
};

export default Music;