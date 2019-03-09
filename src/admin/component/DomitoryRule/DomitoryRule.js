import React from 'react';
import { Link } from 'react-router-dom'

import './DomitoryRule.scss'

import Woman from '../../../assets/illust/woman2.png'

const DomitoryRule = ({List}) => {
    return (
        <React.Fragment>
            <div className = "domitory-rule--button--wrapper">
                <div className = "domitory-rule--button--detail domitory-rule">
                    <div className = "domitory-rule--button">기숙사규칙</div>
                    <Link to = "/admin/domitoryrule/write" style = {{opacity: '0.4'}} className = "domitory-rule--button">글작성</Link>
                    <img src = {Woman} alt = "domitory-rule" className = "domitory-rule--button--illust"/>
                </div>
            </div>
            <div className = "domitory-rule--wrapper">
                <div className = "domitory-rule--header--wrapper">
                    <div className = "domitory-rule--header--content content--number">
                        번호
                    </div>
                    <div className = "domitory-rule--header--content content--title">
                        제목
                    </div>
                    <div className = "domitory-rule--header--content content--author">
                        작성자
                    </div>
                    <div className = "domitory-rule--header--content content--edit">
                        수정
                    </div>
                    <div className = "domitory-rule--header--content content--delete">
                        삭제
                    </div>
                    <div className = "domitory-rule--header--content content--preview">
                        프리뷰
                    </div>
                </div>
                <div className = "domitory-rule--content--wrapper">
                    {List}
                </div>
            </div>
        </React.Fragment>
    );
};

export default DomitoryRule;