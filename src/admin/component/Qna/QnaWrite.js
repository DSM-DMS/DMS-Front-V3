import React from 'react';

import Woman from '../../../assets/illust/woman2.png'

import './QnaWrite.scss'

const QnaWrite = () => {
    return (
        <React.Fragment>
            <div className = "qna-write--button--wrapper">
                <div className = "qna-write--button--detail qna-write">
                    <div className = "qna-write--button"  style = {{opacity: '0.4'}}>자주하는 질문</div>
                    <div className = "qna-write--button">글쓰기</div>
                    <img src = {Woman} alt = "qna-write" className = "qna-write--button--illust"/>
                </div>
            </div>
            <div className = "qna-write--wrapper">
                <div className = "qna-write--title--wrapper">
                    <input className = "qna-write--title" placeholder = "제목을 입력해주세요."/>
                </div>
                <div className = "qna-write--content--wrapper">
                    <textarea className = "qna-write--content" placeholder = "글내용을 입력해주세요." />
                </div>
                <div className = "qna-write--content--button--wrapper">
                    <div className = "qna-write--content--button write">작성완료</div>
                    <div className = "qna-write--content--button cancel">취소하기</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default QnaWrite;