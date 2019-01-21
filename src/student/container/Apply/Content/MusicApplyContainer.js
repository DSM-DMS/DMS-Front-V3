import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMusicDate } from '../../../../actions/index';

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
        const {musicDate, onChangeDate} = this.props;
        const musicBtnList = this.state.dayType.map((type, i) => {
            let selectedClass = undefined;
            if(type === musicDate)
                selectedClass = 'apply--extens--btn--selected';
            return (<ApplyExtensionBtn content = {type} key = {i} selected = {selectedClass} onChangeType = {onChangeDate}/>)
        })
        return (
            <div className = 'apply--music--wrapper'>
                <p className = 'unselectable apply--title'>기상음악 신청</p>
                <div className = 'apply--music--btnlist'>
                    {musicBtnList}
                </div>
                <MusicCardContainer cardsInfo = {this.state.cardsInfo}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    musicDate: state.ApplyTypeSwitch.musicDate
});

const mapDispatchToProps = (dispatch) => ({
    onChangeDate: (musicDate) => dispatch(setMusicDate(musicDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicApplyContainer);