import React from 'react';

import Woman from '../../../assets/illust/woman2.png'

import './SurveyWrite.scss'

const SurveyWrite = () => {
    return (
        <React.Fragment>
            <div className = "survey-write--button--wrapper">
                <div className = "survey-write--button--detail survey">
                    <div style = {{opacity: '0.4'}} className = "survey-write--button">설문조사</div>
                    <div className = "survey-write--button">글작성</div>
                    <img src = {Woman} alt = "survey" className = "survey-write--button--illust"/>
                </div>
            </div>
            <div className = "survey-write--wrapper">
                <div className = "survey-write--content--wrapper">
                    <div className = "survey-write--content--header--wrapper">
                        <span className = "survey-write--content--title">제목 : </span>
                        <input className = "survey-write--input title"/>
                    </div>
                    <div className = "survey-write--content--date--wrapper">
                        <div className = "survey-write--content--date--start">
                            <span className = "survey-write--content--title">시작 날짜 : </span>
                            <input className = "survey-write--input date year"/> 년
                            <input className = "survey-write--input date month"/> 월
                            <input className = "survey-write--input date day"/> 일
                        </div>
                        <div className = "survey-write--content--date--end">
                            <span className = "survey-write--content--title">종료 날짜 : </span>
                            <input className = "survey-write--input date year"/> 년
                            <input className = "survey-write--input date month"/> 월
                            <input className = "survey-write--input date day"/> 일
                        </div>
                    </div>
                    <div className = "survey-write--content--post--wrapper">
                        <span className = "survey-write--content--post--title">설문 조사 내용 :</span>
                        <textarea className = "survey-write--input post"/>
                    </div>
                    <div className = "survey-write--content--grade--wrapper"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SurveyWrite;