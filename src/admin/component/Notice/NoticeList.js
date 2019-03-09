import React from 'react';

import { Link } from 'react-router-dom'

import './NoticeList.scss'

const NoticeList = ({data, HandleDelete}) => {
    const id = data.noticeId
    return (
        <div className = "notice--list--wrapper">
            <div className = "notice--list list--number">
                {data.noticeId}
            </div>
            <div className = "notice--list list--title">
                {data.title}
            </div>
            <div className = "notice--list list--author">
                Admin
            </div>
            <Link className = "notice--list list--edit" to = {'/admin/notice/edit/' + data.noticeId}>
                <div className = "icon--edit" />
            </Link>
            <div onClick = {() => HandleDelete(id)} className = "notice--list list--delete">
                <div className = "icon--delete" />   
            </div>
            <Link className = "notice--list list--preview" to = {'/admin/notice/' + data.noticeId}>
                <div className = "icon--preview"/>   
            </Link>
        </div>
    );
};

export default NoticeList;