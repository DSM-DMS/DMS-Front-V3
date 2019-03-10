import React from 'react';
import {Link} from 'react-router-dom'

import Woman from '../../../assets/illust/woman2.png'

import './ShowNotice.scss'

const ShowNotice = ({data}) => {
    return (
        <React.Fragment>
            <div className = "notice--button--wrapper">
                <div className = "notice--button--detail notice">
                    <div className = "notice--button">공지사항</div>
                    <Link to = "/admin/notice/write" style = {{opacity: '0.4'}} className = "notice--button">글작성</Link>
                    <img src = {Woman} alt = "notice" className = "notice--button--illust"/>
                </div>
            </div>
            <div className = "notice--show--wrapper">
                <div className = "notice--show--title">
                    제목 : {data.title}
                </div>
                <div className = "notice--show--content--wrapper">
                    <div className = "notice--show--content">
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

export default ShowNotice;