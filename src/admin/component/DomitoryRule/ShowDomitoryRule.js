import React from 'react';

import Woman from '../../../assets/illust/admin-1.png'

import './ShowDomitoryRule.scss'

const ShowDomitoryRule = ({match, postData}) => {
    return (
        <React.Fragment>
            <div className = "domitory-rule--button--wrapper">
                <div className = "domitory-rule--button--detail domitory-rule">
                    <div className = "domitory-rule--button">기숙사규칙</div>
                    <img src = {Woman} alt = "Domitory_Rule" className = "domitory-rule--button--illust"/>
                </div>
            </div>
            <div className = "domitory-rule--show--wrapper">
                <div className = "domitory-rule--show--title">
                    제목 : {postData[(match.params.postId) - 1].title}
                </div>
                <div className = "domitory-rule--show--content--wrapper">
                    <div className = "domitory-rule--show--content">
                        { 
                            postData[(match.params.postId) - 1].content.split('\n').map((item, idx) => { 
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