import React from 'react';

import './GoingOutList.scss'
import trash from '../../../assets/icon/ic_trash.png'

const GoingOutList = ({onModal, data}) => {
    return (
        <div className = "goingout--datalist--wrapper">
            <div onClick = {() => {onModal(data.applyId)}} className = "goingout--datalist--content content--number">
                {data.applyId}
            </div>
            <div onClick = {() => {onModal(data.applyId)}} className = "goingout--datalist--content content--name">
                {data.studentName}
            </div>
            <div onClick = {() => {onModal(data.applyId)}} className = "goingout--datalist--content content--schoolnumber">
                {data.studentNumber}
            </div>
            <div onClick = {() => {onModal(data.applyId)}} className = "goingout--datalist--content content--time">
                {data.goOutDate} ~ {data.returnDate}
            </div>
            <div onClick = {() => {onModal(data.applyId)}} className = "goingout--datalist--content content--check">
                {data.goingout_status}
            </div>
            <div className = "goingout--datalist--content content--delete">
                <img className = "goingout delete_icon" onClick = {() => {console.log('삭제')}} alt = "trash icon" src = {trash}/>
            </div>
        </div>
    );
};

export default GoingOutList;