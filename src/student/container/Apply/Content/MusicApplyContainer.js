import React, { Component } from 'react';

import './MusicApplyContainer.scss'

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn';
import MusicCardContainer from './MusicCardContainer';

class MusicApplyContainer extends Component {
    state = {
        dayType:['월요일', '화요일', '수요일', '목요일', '금요일'],
        cardsInfo: [
            {
                title: '골드는 못가',
                singer: '이종현',
                author: '이종현'
            },
            {
                title: '골드는 못가',
                singer: '이종현',
                author: '이종현'
            },
            {
                title: '골드는 못가',
                singer: '이종현',
                author: '이종현'
            },
            {
                title: '골드는 못가',
                singer: '이종현',
                author: '이종현'
            }
        ]
    }

    render() {
        const musicBtnList = this.state.dayType.map((type, i) => {
            return (<ApplyExtensionBtn content = {type} key = {i}/>)
        })
        return (
            <div className = 'apply--music--wrapper'>
                <p className = 'apply--title'>기상음악 신청</p>
                <div className = 'apply--music--btnlist'>
                    {musicBtnList}
                </div>
                <MusicCardContainer cardsInfo = {this.state.cardsInfo}/>
            </div>
        );
    }
}

export default MusicApplyContainer;