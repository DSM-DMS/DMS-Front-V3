import React from 'react';

import { Link } from 'react-router-dom'

import './DomitoryRuleList.scss'

const DomitoryRuleList = ({data}) => {
    return (
        <div className = "domitory-rule--list--wrapper">
            <div className = "domitory-rule--list list--number">
                {data.number}
            </div>
            <div className = "domitory-rule--list list--title">
                {data.title}
            </div>
            <div className = "domitory-rule--list list--author">
                {data.author}
            </div>
            <div className = "domitory-rule--list list--edit">
                <div className = "icon--edit" />
            </div>
            <div className = "domitory-rule--list list--delete">
                <div className = "icon--delete" />   
            </div>
            <Link className = "domitory-rule--list list--preview" to = {'/admin/domitoryrule/' + data.number}>
                <div className = "icon--preview" />   
            </Link>
        </div>
    );
};

export default DomitoryRuleList;