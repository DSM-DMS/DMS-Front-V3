import React, { Component } from 'react';

import MusicList from '../../component/Music/MusicList'

import Music from '../../component/Music/Music'
import axios from 'axios';
import { getCookie } from '../../../lib/cookie'

class MusicContainer extends Component {
    handleIndex = (state) => {
        if(state === 'prev') {
            if(this.state.dateIndex > 0)
                this.setState({
                    dateIndex : this.state.dateIndex - 1
                })
        }
        else if(state === 'next') {
            if(this.state.dateIndex < 4)
                this.setState({
                    dateIndex : this.state.dateIndex + 1
                })
        }
    }

    state = {
        loading: true,
        dateIndex : 0,
        dayList : [
            {
                day : '월요일',
                list : [
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                ]
            },
            {
                day : '화요일',
                list : [
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                ]
            },
            {
                day : '수요일',
                list : [
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                ]
            },
            {
                day : '목요일',
                list : [
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                ]
            },
            {
                day : '금요일',
                list : [
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                    {
                        musicName : null,
                        singer : null,
                    },
                ]
            },
        ]
    }

    componentDidMount = () => {
        const cookie = getCookie('JWT')
        const { dayList } = this.state
        console.log(cookie)
        axios.get('https://admin-api.dms.istruly.sexy/music',
        {
            headers : {
                Authorization : `Bearer ${cookie}`
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                dayList : [
                    {
                        ...dayList[0],
                        list : [ ...res.data.mon ],
                    },
                    {
                        ...dayList[1],
                        list : [ ...res.data.tue ],
                    },
                    {
                        ...dayList[2],
                        list : [ ...res.data.wed ],
                    },
                    {
                        ...dayList[3],
                        list : [ ...res.data.thu ],
                    },
                    {
                        ...dayList[4],
                        list : [ ...res.data.fri ],
                    }
                ]
            })
        })
        .catch(err => {

        })
    }

    render() {
        const { dayList, dateIndex } = this.state
        console.log(dayList)
        return (
            <Music onIndexChange = {this.handleIndex} list = {dayList} dateIndex = {dateIndex}/>
        );
    }
}

export default MusicContainer;