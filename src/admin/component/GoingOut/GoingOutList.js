import React from 'react';

import './GoingOutList.scss'

const GoingOutList = ({data}) => {
    return (
        <div className = "goingout--datalist--wrapper">
            <div className = "goingout--datalist--content content--number">
                {data.applyId}
            </div>
            <div className = "goingout--datalist--content content--name">
                {data.studentName}
            </div>
            <div className = "goingout--datalist--content content--schoolnumber">
                {data.studentNumber}
            </div>
            <div className = "goingout--datalist--content content--time">
                외출시간
            </div>
            <div className = "goingout--datalist--content content--check">
                {data.goingout_status}
            </div>
            <div className = "goingout--datalist--content content--delete">
                삭제
            </div>
        </div>
    );
};

export default GoingOutList;