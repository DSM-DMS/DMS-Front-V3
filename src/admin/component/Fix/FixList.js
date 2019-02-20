import React from 'react';

import { Link } from 'react-router-dom'

import './FixList.scss'

const FixList = ({data}) => {
    return (
        <div className = "fix--list--wrapper">
            <div className = "fix--list--header--wrapper">
                <div className = "fix--list--header--name">
                    {data.studentName}
                </div>
                <div className = "fix--list--header--content--wrapper">
                    <Link className = "fix--list" to = {'/admin/fix/' + data.reportId}>
                        <div className = "icon--preview" />   
                    </Link>
                    <div className = "fix--list">
                        <div className = "icon--delete" />   
                    </div>
                </div>
            </div>
            <div className = "fix--list--content--wrapper">
                {data.content}
            </div>
            <div className = "fix--list--footer--wrapper">
                {data.room}호
            </div>
        </div>
    );
};

export default FixList;