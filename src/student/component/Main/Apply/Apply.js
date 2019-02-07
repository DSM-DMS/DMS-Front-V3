import React from 'react';

import './Apply.scss';

const Apply = ({cardList, hoverImg}) => {
    return (
        <div className="main--apply--wrapper" id="apply">
            {hoverImg()}
            <div className="inner--wrapper">
                <div className="main--apply--title--wrapper">
                    <span className="main--apply--title">신청화면</span>
                    <span className="main--apply--title--sub">기숙사 생활에 관련된 편의 기능을 이용해보세요.</span>
                </div>
                <div className="main--apply--card--list">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Apply;