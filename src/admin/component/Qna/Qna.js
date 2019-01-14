import React from 'react';

import './Qna.scss'

import Woman from '../../../assets/illust/woman2.png'

const Qna = ({postList}) => {
    return (
        <React.Fragment>
            <div className = "qna--button--wrapper">
                <div className = "qna--button--detail qna">
                    <div className = "qna--button">자주하는 질문</div>
                    <div style = {{opacity: '0.4'}} className = "qna--button">글쓰기</div>
                    <img src = {Woman} alt = "qna" className = "qna--button--illust"/>
                </div>
            </div>
            <div className = "qna--wrapper">
                <div className = "qna--header--wrapper">
                    <div className = "qna--header--content content--number">
                        번호
                    </div>
                    <div className = "qna--header--content content--title">
                        제목
                    </div>
                    <div className = "qna--header--content content--author">
                        작성자
                    </div>
                    <div className = "qna--header--content content--edit">
                        수정
                    </div>
                    <div className = "qna--header--content content--delete">
                        삭제
                    </div>
                    <div className = "qna--header--content content--preview">
                        프리뷰
                    </div>
                </div>
                <div className = "qna--content--wrapper">
                    {postList}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Qna;