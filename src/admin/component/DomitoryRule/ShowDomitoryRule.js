import React from 'react';
import {Link} from 'react-router-dom'

import Woman from '../../../assets/illust/woman2.png'

import './ShowDomitoryRule.scss'

const ShowDomitoryRule = ({data}) => {
    return (
        <React.Fragment>
            <div className = "domitory-rule--button--wrapper">
                <div className = "domitory-rule--button--detail domitory-rule">
                    <div className = "domitory-rule--button">기숙사규칙</div>
                    <Link to = "/admin/domitoryrule/write" style = {{opacity: '0.4'}} className = "domitory-rule--button">글작성</Link>
                    <img src = {Woman} alt = "domitory-rule" className = "domitory-rule--button--illust"/>
                </div>
            </div>
            <div className = "domitory-rule--show--wrapper">
                <div className = "domitory-rule--show--title">
                    제목 : {data.title}
                </div>
                <div className = "domitory-rule--show--content--wrapper">
                    <div className = "domitory-rule--show--content">
                        { 
                            data.content.split('\n').map((item, idx) => { 
                                    return (
                                    <span key={idx}> 
                                        {item} 
                                        <br/> 
                                    </span> 
                                ); 
                            }) 
                        } 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ShowDomitoryRule;