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
                reason: "밥먹으러 나갈려고 하는데 왜 못나가요? 형규는 제주도에 있는데 지하철 노선도 그만 그리고 나도 디자인하고 싶읜데ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ….",
                returnDate: "2019-01-01 09:00",
                
            },
            {
                goOutDate: "2019-01-01 12:00",
                id: 124,
                reason: "밥먹으러 나갈려고 하는데 왜 못나가요? 형규는 제주도에 있는데 지하철 노선도 그만 그리고 나도 디자인하고 싶읜데ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ….",
                returnDate: "2019-01-01 13:00"
            },
            {
                goOutDate: "2019-01-01 18:00",
                id: 222,
                reason: "밥먹으러 나갈려고 하는데 왜 못나가요? 형규는 제주도에 있는데 지하철 노선도 그만 그리고 나도 디자인하고 싶읜데ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ….",
                returnDate: "2019-01-01 19:00"
            }
        ]
    };

    render() {
        const {gooutType} = this.state
        const gooutBtnList = gooutType.map((type, i) => {
            let isSeletedBtn = 'apply--extens--btn--selected';
            if(i%5 !== 2) {
                console.log('111');
                isSeletedBtn = undefined;
            }else {
                console.log('2222');
            }
            return (<ApplyExtensionBtn content = {type} seleted = {isSeletedBtn} key = {i}/>)   
        })

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