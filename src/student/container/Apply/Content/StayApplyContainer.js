import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setStayType} from '../../../../actions/ApplyActions';

import './StayApplyContainer.scss'

import StayCardContainer from './StayCardContainer'
import ApplyAcceptBtn from '../../../component/Apply/content/ApplyAcceptBtn';

class StayApplyContainer extends Component {

    render() {
        const {stayType, onChangeStayType} = this.props;
        const isChecked = stayType !== '';
        return (
            <div className = 'apply--stay--wrapper'>
                <p className = 'unselectable apply--title'>잔류 신청</p>
                <StayCardContainer selectedType = {stayType} onChangeType = {onChangeStayType}/>
                {
                    isChecked && <div className = 'apply--extension--accept--btnlist'>
                        <ApplyAcceptBtn type = 'apply--extension--cancle--btn' title = '취소'/>
                        <ApplyAcceptBtn type = 'apply--extension--accept--btn' title = '신청'/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    stayType: state.ApplyTypeSwitch.stayType
});

const mapDispatchToProps = (dispatch) => ({
    onChangeStayType: (stayType) => dispatch(setStayType(stayType))
});

export default connect(mapStateToProps, mapDispatchToProps)(StayApplyContainer);