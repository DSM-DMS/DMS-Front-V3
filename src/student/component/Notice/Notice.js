import React from 'react';

import noticeLeftBackground from '../../../assets/icon/left_illustration.png'
import noticeRightBackground from '../../../assets/icon/right_illustration.png'

import './Notice.scss';

const Notice = ({cardList}) => {
    return (
        <div className="notice--wrapper" id="notice">
            <img src={noticeLeftBackground} alt="" className="notice--background--left"/>
            <img src={noticeRightBackground} alt="" className="notice--background--right"/>
            <div className="notice--inner--wrapper">
                <div className="notice--title--wrapper">
                    <span className="notice--title">DMS 기숙사 안내사항</span>
                    <span className="notice--title--sub">
                        대덕소프트웨어마이스터고등학교 사감부에서 작성한 안내사항을 열람하세요.
                    </span>
                </div>

                <div className="notice--card--list">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Notice;