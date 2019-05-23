import React, { Component } from 'react';
import Manage from '../../component/Main/Manage';

import ManageCard from '../../component/Main/ManageCard';

class ManagerContainer extends Component {
    state = {
        manageList : [
            {
                kind: 'notice',
                title: '공지사항',
                description: '공지사항을 작성, 관리합니다.'
            },
            {
                kind: 'domitoryrule',
                title: '기숙사 규칙',
                description: '기숙사 규칙을 작성, 관리합니다.'
            },
            {
                kind: 'fix',
                title: '시설물 고장',
                description: '시설 고장 목록을 조회합니다.'
            },
            {
                kind: 'survey',
                title: '설문조사',
                description: '설문조사를 작성할 수 있습니다.'
            },
            {
                kind: 'music',
                title: '기상 음악 신청',
                description: '기상 음악 신청 현황을 확인합니다.'
            },
            {
                kind: 'goingout',
                title: '외출자관리',
                description: '외출명단을 관리할 수 있습니다.'
            }
        ]
    }

    render() {
        const {manageList} = this.state;
        const list = manageList.map(data => (
            <ManageCard cardData = {data} key = {data.kind}/>
        ))
        return (
            <Manage cardList = {list}/>
        );
    }
}

export default ManagerContainer;