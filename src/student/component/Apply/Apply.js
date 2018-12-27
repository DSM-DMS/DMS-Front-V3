import React from 'react';

import './Apply.scss';

const Apply = ({cardList, hoverImg}) => {
    return (
        <div className="apply--wrapper" id="apply">
            {hoverImg()}
            <div className="apply--inner--wrapper">
                <div className="apply--title--wrapper">
                    <span className="apply--title">신청화면</span>
                    <span className="apply--title--sub">기숙사 생활에 관련된 편의 기능을 이용해보세요.</span>
                </div>
                <div className="apply--card--list">
                    {cardList}
                </div>
            </div>
        </div>
    );
};

export default Apply;