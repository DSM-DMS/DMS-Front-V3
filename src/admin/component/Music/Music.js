import React from 'react';

import Woman from '../../../assets/illust/admin-1.png'

import './Music.scss'

const Music = ({list, dateIndex, onIndexChange}) => {
    return (
        <React.Fragment>
            <div className = "music--button--wrapper">
                <div className = "music--button--detail music">
                    <div className = "music--button">기상 음악 신청</div>
                    <img src = {Woman} alt = "music" className = "music--button--illust"/>
                </div>
            </div>
            <div className = "music--detail--wrapper">
                <div className = "music--detail--header--wrapper" key = {0}>
                    {list[dateIndex].day}
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
                                        <div className = "music--detail--content--main--content title">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content title">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className = "music--detail--content--main--detail--wrapper second">
                                    <div className = "music--detail--content--main--detail">
                                        후보
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content title">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content title">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        
                                        </div>
                                    </div>
                                    <div className = "music--detail--content--main--content--wrapper">
                                        <div className = "music--detail--content--main--content title">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content artist">
                                        
                                        </div>
                                        <div className = "music--detail--content--main--content studentname">
                                        
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