import React from 'react'

import './StayCardContainer.scss'

import StayCard from '../../../component/Apply/content/stay/StayCard'

import ic_1 from '../../../../assets/icon/ic_apply_stay_1.png';
import ic_2 from '../../../../assets/icon/ic_apply_stay_2.png';
import ic_3 from '../../../../assets/icon/ic_apply_stay_2.png';
import ic_4 from '../../../../assets/icon/ic_apply_stay_4.png';

const StayCardContainer = () => {
    const cardInfoList = [
        {
            title: '금요귀가',
            content: '금요귀가를 신청하신 경우 금요일 일과 종료 후 오후 8시 30분 이후 귀가하여 일요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 금요귀가를 신청하시겠습니까?',
            iconSrc: ic_1
        },
        {
            title: '토요귀가',
            content: '토요귀가를 신청하신 경우 토요일 오후 9시 이전에 귀가하여 일요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 토요귀가를 신청하시겠습니까?',
            iconSrc: ic_2
        },
        {
            title: '토요귀사',
            content: '토요귀사를 신청하신 경우 금요일 일과 종료 후 오후 8시 30분 이후 귀가하여 토요일 오전 8시 30분 이후 기숙사로 귀사 가능합니다. 토요귀사를 신청하시겠습니까?',
            iconSrc: ic_3
        },
        {
            title: '잔류',
            content: '잔류를 신청하신 경우 주말동안 기숙사에 남게 됩니다. 잔류를 신청하시겠습니까?',
            iconSrc: ic_4
        }
    ]

    const cardList = cardInfoList.map((info) => {
        return (<StayCard content = {info.content} title = {info.title} iconSrc = {info.iconSrc}/>)
    })

    return (
        <div className = 'apply--stay--card--wrapper'>
            {cardList}
        </div>
    )
}

export default StayCardContainer