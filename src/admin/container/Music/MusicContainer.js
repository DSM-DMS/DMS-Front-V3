import React, { Component, Fragment } from 'react';

import MusicList from '../../component/Music/MusicList'

import Loading from '../../common/Loading/Loading'
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

    response = {
        mon : [],
        tue : [],
        wed : [],
        thu : [],
        fri : []
    }

    state = {
        loading: true,
        dateIndex : 0,
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
            this.response = {...res.data}
            console.log(this.response)
            this.setState({
                loading: false
            })
        })
        .catch(err => {
            alert('로그인이 필요합니다')
            console.log(err)
            this.props.history.push('/admin/login')
        })
    }

    render() {
        const { dayList, dateIndex, loading } = this.state
        let day;
        let list = [];
        let index;
        console.log(this.response)
        switch(dateIndex) {
            case 0:
                index = this.response.mon.length - 1
                for(let i = 0; i <= index; i++) {
                    list.push({...this.response.mon[i]})
                    if(list[i].singer.length > 8) {
                        list[i].singer = list[i].singer.slice(0, 8) + "..."
                    }
                }
                for(let i = index; i <= 4; i++) {
                    list.push({musicName : '', singer : '', studentName : ''})
                }
                day = '월요일'
                break
            case 1:
                index = this.response.tue.length - 1
                for(let i = 0; i <= index; i++) {
                    list.push({...this.response.tue[i]})
                    if(list[i].singer.length > 8) {
                        list[i].singer = list[i].singer.slice(0, 8) + "..."
                    }
                }
                for(let i = index; i <= 4; i++) {
                    list.push({musicName : '', singer : '', studentName : ''})
                }
                day = '화요일'
                break
            case 2:
                index = this.response.wed.length - 1
                for(let i = 0; i <= index; i++) {
                    list.push({...this.response.wed[i]})
                    if(list[i].singer.length > 8) {
                        list[i].singer = list[i].singer.slice(0, 8) + "..."
                    }
                }
                for(let i = index; i <= 4; i++) {
                    list.push({musicName : '', singer : '', studentName : ''})
                }
                day = '수요일'
                break
            case 3:
                index = this.response.thu.length - 1
                for(let i = 0; i <= index; i++) {
                    list.push({...this.response.thu[i]})
                    if(list[i].singer.length > 8) {
                        list[i].singer = list[i].singer.slice(0, 8) + "..."
                    }
                }
                for(let i = index; i <= 4; i++) {
                    list.push({musicName : '', singer : '', studentName : ''})
                }
                day = '목요일'
                break
            case 4:
                index = this.response.fri.length - 1
                for(let i = 0; i <= index; i++) {
                    list.push({...this.response.fri[i]})
                    if(list[i].singer.length > 8) {
                        list[i].singer = list[i].singer.slice(0, 8) + "..."
                    }
                }
                for(let i = index; i <= 4; i++) {
                    list.push({musicName : '', singer : '', studentName : ''})
                }
                day = '금요일'
                break
            default:
                break;
        }


        console.log(day)
        return (
            <Fragment>
            {
                loading && <Loading />
            }
            {   
                !loading &&
                <Music day = {day} onIndexChange = {this.handleIndex} list = {list} dateIndex = {dateIndex}/>
            }
            </Fragment>
        );
    }
}

export default MusicContainer;