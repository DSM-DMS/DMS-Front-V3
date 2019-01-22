import React from 'react';

import './Survey.scss'

import Woman from '../../../assets/illust/woman2.png'

const Survey = ({postList}) => {
    return (
        <React.Fragment>
            <div className = "survey--button--wrapper">
                <div className = "survey--button--detail survey">
                    <div className = "survey--button">설문조사</div>
                    <div style = {{opacity: '0.4'}} className = "survey--button">글작성</div>
                    <img src = {Woman} alt = "survey" className = "survey--button--illust"/>
                </div>
            </div>
            <div className = "survey--wrapper">
                <div className = "survey--header--wrapper">
                    <div className = "survey--header--content content--number">
                        번호
                    </div>
                    <div className = "survey--header--content content--title">
                        제목
                    </div>
                    <div className = "survey--header--content content--author">
                        작성자
                    </div>
                    <div className = "survey--header--content content--edit">
                        수정
                    </div>
                    <div className = "survey--header--content content--delete">
                        삭제
                    </div>
                    <div className = "survey--header--content content--preview">
                        프리뷰
                    </div>
                </div>
                <div className = "survey--content--wrapper">
                    {postList}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Survey;