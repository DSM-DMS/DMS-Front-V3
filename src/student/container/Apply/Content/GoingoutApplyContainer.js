import React, { Component } from 'react'
import './GoingoutApplyContainer.scss'

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn'
import GoingoutCardContainer from './GoingoutCardContainer'

class GoingoutApplyContainer extends Component {

    state = {
        gooutType: ['토요일', '일요일', '평일'],
        goingOut: [
            {
                goOutDate: "2019-01-01 08:00",
                id: 123,
                reason: "아침 식사 외출(서브웨이)",
                returnDate: "2019-01-01 09:00"
            },
            {
                goOutDate: "2019-01-01 12:00",
                id: 124,
                reason: "점심 식사 외출(베스타)",
                returnDate: "2019-01-01 13:00"
            },
            {
                goOutDate: "2019-01-01 18:00",
                id: 222,
                reason: "저녁 식사 외출(신라호텔)",
                returnDate: "2019-01-01 19:00"
            }
        ]
    };

    render() {
        const {gooutType} = this.state
        const gooutBtnList = gooutType.map((type, i) => (<ApplyExtensionBtn content = {type}/>))

        return (
            <div className = 'apply--goingout--wrapper'>
                <p className = 'apply--title'>외출 신청</p>
                <div className = 'apply--extension--btnlist'>
                    {gooutBtnList}
                </div>
                <GoingoutCardContainer cardList = {this.state.goingOut} />
            </div>
        )
    }
}

export default GoingoutApplyContainer;