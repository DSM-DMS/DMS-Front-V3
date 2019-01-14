import React from 'react';

import { Link } from 'react-router-dom'

import './FixList.scss'

const FixList = ({data}) => {
    return (
        <div className = "fix--list--wrapper">
            <div className = "fix--list--header--wrapper">
                <div className = "fix--list--header--name">
                    {data.name}
                </div>
                <div className = "fix--list--header--content--wrapper">
                    <Link className = "fix--list" to = {'/admin/domitoryrule/' + data.number}>
                        <div className = "icon--preview" />   
                    </Link>
                    <Link className = "fix--list" to = {'/admin/domitoryrule/' + data.number}>
                        <div className = "icon--delete" />   
                    </Link>
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