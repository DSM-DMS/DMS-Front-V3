import React from 'react';

import { Link } from 'react-router-dom'

import './DomitoryRuleList.scss'

const DomitoryRuleList = ({data, HandleDelete}) => {
    const id = data.ruleId
    return (
        <div className = "domitory-rule--list--wrapper">
            <div className = "domitory-rule--list list--number">
                {data.ruleId}
            </div>
            <div className = "domitory-rule--list list--title">
                {data.title}
            </div>
            <div className = "domitory-rule--list list--author">
                Admin
            </div>
            <Link className = "domitory-rule--list list--edit" to = {'/admin/domitoryrule/edit/' + data.ruleId}>
                <div className = "icon--edit" />
            </Link>
            <div onClick = {() => HandleDelete(id)} className = "domitory-rule--list list--delete">
                <div className = "icon--delete" />   
            </div>
            <Link className = "domitory-rule--list list--preview" to = {'/admin/domitoryrule/' + data.ruleId}>
                <div className = "icon--preview"/>   
            </Link>
        </div>
    );
};

export default DomitoryRuleList;