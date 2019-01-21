import React from 'react';

import './Notice.scss'

import Woman from '../../../assets/illust/woman2.png'

const Notice = ({postList}) => {
    return (
        <React.Fragment>
            <div className = "notice--button--wrapper">
                <div className = "notice--button--detail notice">
                    <div className = "notice--button">공지사항</div>
                    <div style = {{opacity: '0.4'}} className = "notice--button">글쓰기</div>
                    <img src = {Woman} alt = "notice" className = "notice--button--illust"/>
                </div>
            </div>
            <div className = "notice--wrapper">
                <div className = "notice--header--wrapper">
                    <div className = "notice--header--content content--number">
                        번호
                    </div>
                    <div className = "notice--header--content content--title">
                        제목
                    </div>
                    <div className = "notice--header--content content--author">
                        작성자
                    </div>
                    <div className = "notice--header--content content--edit">
                        수정
                    </div>
                    <div className = "notice--header--content content--delete">
                        삭제
                    </div>
                    <div className = "notice--header--content content--preview">
                        프리뷰
                    </div>
                </div>
                <div className = "notice--content--wrapper">
                    {postList}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Notice;