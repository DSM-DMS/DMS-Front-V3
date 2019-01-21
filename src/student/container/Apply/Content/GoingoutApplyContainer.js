import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setGooutDate } from '../../../../actions/index';

import './GoingoutApplyContainer.scss'

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn'
import GoingoutCardContainer from './GoingoutCardContainer'
import ApplyAcceptBtn from '../../../component/Apply/content/ApplyAcceptBtn';

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
            },
            {
                goOutDate: "2019-01-01 18:00",
                id: 242,
                reason: "밥먹으러 나갈려고 하는데 왜 못나가요? 형규는 제주도에 있는데 지하철 노선도 그만 그리고 나도 디자인하고 싶읜데ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ….",
                returnDate: "2019-01-01 19:00"
            },
            {
                goOutDate: "2019-01-01 18:00",
                id: 2555,
                reason: "밥먹으러 나갈려고 하는데 왜 못나가요? 형규는 제주도에 있는데 지하철 노선도 그만 그리고 나도 디자인하고 싶읜데ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ….",
                returnDate: "2019-01-01 19:00"
            }
        ]
    };

    onSelectedChanged = (newBtn) => {
        console.log(newBtn);
        this.setState({
            selectedBtn: newBtn
        });
    }

    render() {
        const {gooutType} = this.state;
        const {gooutDate, onChangeDate, goingoutCard} = this.props;
        const isSelected = goingoutCard !== null;
        const gooutBtnList = gooutType.map((type, i) => {
            let selectedClass = undefined;
            if(type === gooutDate)
                selectedClass = 'apply--extens--btn--selected';

            return (<ApplyExtensionBtn content = {type} selected = {selectedClass} key = {i} onChangeType = {onChangeDate}/>)
        })

        return (
            <div className = 'unselectable apply--goingout--wrapper'>
                <p className = 'apply--title'>외출 신청</p>
                <div className = 'apply--extension--btnlist'>
                    {gooutBtnList}
                </div>
                <GoingoutCardContainer cardList = {this.state.goingOut} />
                { (isSelected) && <div className = 'apply--extension--accept--btnlist'>
                    <ApplyAcceptBtn type = 'apply--extension--cancle--btn' title = '취소'/>
                    <ApplyAcceptBtn type = 'apply--extension--accept--btn' title = '수정'/>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gooutDate: state.ApplyTypeSwitch.gooutDate,
    goingoutCard: state.ApplyCardSwitch.goingoutCard
});

const mapDispatchToProps = (dispatch) =>({
    onChangeDate: (gooutDate) => dispatch(setGooutDate(gooutDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoingoutApplyContainer);