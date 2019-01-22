import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMusicDate } from '../../../../actions/ApplyActions';

import './MusicApplyContainer.scss'

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn';
import MusicCardContainer from './MusicCardContainer';

class MusicApplyContainer extends Component {
    state = {
        dayType:['월요일', '화요일', '수요일', '목요일', '금요일'],
        cardsInfo: {
            "fri": [
                {
                    "applyDate": "2019-01-12 11:27:25.689022",
                    "id": 8,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "금요일의 누군가"
                },
                {
                    "applyDate": "2019-01-23 11:27:25.689022",
                    "id": 9,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "그묭일"
                }
            ],
            "mon": [
                {
                    "applyDate": "2019-01-07 11:27:25.689022",
                    "id": 1,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "월요요"
                },
                {
                    "applyDate": "2019-02-07 11:27:25.689022",
                    "id": 10,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "ㅇㅗ로롤로"
                }
            ],
            "thu": [
                {
                    "applyDate": "2019-01-17 11:27:25.689022",
                    "id": 6,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "목요일"
                },
                {
                    "applyDate": "2019-01-27 11:27:25.689022",
                    "id": 7,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "목오고고곡"
                }
            ],
            "tue": [
                {
                    "applyDate": "2019-03-07 11:27:25.689022",
                    "id": 2,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "화요일이네"
                },
                {
                    "applyDate": "2019-04-07 11:27:25.689022",
                    "id": 3,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "화가난다"
                },
                {
                    "applyDate": "2019-01-08 11:27:25.689022",
                    "id": 2132,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수근수근"
                },
                {
                    "applyDate": "2019-01-08 11:27:25.689022",
                    "id": 2136,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수근수근"
                },
                {
                    "applyDate": "2019-01-08 11:27:25.689022",
                    "id": 21223,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수근수근"
                }
            ],
            "wed": [
                {
                    "applyDate": "2019-01-03 11:27:25.689022",
                    "id": 4,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수요일"
                },
                {
                    "applyDate": "2019-01-08 11:27:25.689022",
                    "id": 5,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수근수근"
                },
                {
                    "applyDate": "2019-01-08 11:27:25.689022",
                    "id": 5333,
                    "musicName": "aaa",
                    "singer": "aaa",
                    "studentName": "수근수근"
                }
            ]
        }
    }

    render() {
        const {musicDate, onChangeDate} = this.props;
        let selectedDate;
        const musicBtnList = this.state.dayType.map((type, i) => {
            let selectedClass = undefined;
            if(type === musicDate)
                selectedClass = 'apply--extens--btn--selected';
            return (<ApplyExtensionBtn content = {type} key = {i} selected = {selectedClass} onChangeType = {onChangeDate}/>)
        })
        switch(musicDate) {
            case '월요일':
                selectedDate = 'mon';
                break;
            case '화요일':
                selectedDate = 'tue';
                break;
            case '수요일':
                selectedDate = 'wed';
                break;
            case '목요일':
                selectedDate = 'thu';
                break;
            case '금요일':
                selectedDate = 'fri';
                break;
            default:
                selectedDate = 'mon'
        }
        return (
            <div className = 'apply--music--wrapper'>
                <p className = 'unselectable apply--title'>기상음악 신청</p>
                <div className = 'apply--music--btnlist'>
                    {musicBtnList}
                </div>
                <MusicCardContainer cardsInfo = {this.state.cardsInfo[selectedDate]}/>
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