import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExtensionRoom } from '../../../../actions/ApplyActions';

import './ExtensionApplyContainer.scss';

import ApplyExtensionBtn from '../../../component/Apply/content/ApplyExtensionBtn';
import ApplyExtensionMap from '../../../component/Apply/content/ApplyExtensionMap';
import ApplyAcceptBtn from '../../../component/Apply/content/ApplyAcceptBtn';

class ExtensionApplyContainer extends Component {
    render() {
        const btns = ['가온실', '나온실', '다온실', '라온실', '2층 여자 독서실', '3층 계단측 독서실', '3층 학교측 독서실', '4층 계단측 독서실', '4층 학교측 독서실', '5층 열린 교실'];
        const {room, onChangeRoom} = this.props;

        const btnList = btns.map((content, i) => {
            
            let selectedClass = undefined;
            if(room === i)
                selectedClass = selectedClass = 'apply--extens--btn--selected';
            return (<ApplyExtensionBtn content={content} key = {i} selected = {selectedClass} onChangeType = {onChangeRoom} val={i}/>);
        });

        return (
            <div className = 'apply--extension--wrapper'>
                <p className = 'unselectable apply--title'>연장학습 신청</p>
                <div className = 'apply--extension--btnlist'>
                    {btnList}
                </div>
                <ApplyExtensionMap time={1} classNum={room+1}/>
                <div className = 'apply--extension--accept--btnlist'>
                    <ApplyAcceptBtn type = 'apply--extension--cancle--btn' title = '취소'/>
                    <ApplyAcceptBtn type = 'apply--extension--accept--btn' title = '신청'/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    room: state.ApplyTypeSwitch.room
});

const mapDispatchToProps = (dispatch) => ({
    onChangeRoom: (room) => dispatch(setExtensionRoom(room))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExtensionApplyContainer)