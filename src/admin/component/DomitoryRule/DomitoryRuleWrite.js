import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/illust/woman2.png'

import './DomitoryRuleWrite.scss'

const DomitoryRuleWrite = ({HandleCancle, HandleChange, HandleAJAX, title, content, id}) => {
    return (
        <React.Fragment>
            <div className = "domitory-rule-write--button--wrapper">
                <div className = "domitory-rule-write--button--detail domitory-rule-write">
                    <Link to = "/admin/domitoryrule" className = "domitory-rule-write--button"  style = {{opacity: '0.4'}}>기숙사규칙</Link>
                    <div className = "domitory-rule-write--button">글작성</div>
                    <img src = {Woman} alt = "domitory-rule-write" className = "domitory-rule-write--button--illust"/>
                </div>
            </div>
            <div className = "domitory-rule-write--wrapper">
                <div className = "domitory-rule-write--title--wrapper">
                    <input onChange = {HandleChange} value = {title} name = "title" className = "domitory-rule-write--title" placeholder = "제목을 입력해주세요."/>
                </div>
                <div className = "domitory-rule-write--content--wrapper">
                    <textarea onChange = {HandleChange} value = {content} name = "content" className = "domitory-rule-write--content" placeholder = "글내용을 입력해주세요." />
                </div>
                <div className = "domitory-rule-write--content--button--wrapper">
                    <div onClick = {() => HandleAJAX(id)} className = "domitory-rule-write--content--button write">작성완료</div>
                    <div onClick = {HandleCancle} className = "domitory-rule-write--content--button cancel">취소하기</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DomitoryRuleWrite;