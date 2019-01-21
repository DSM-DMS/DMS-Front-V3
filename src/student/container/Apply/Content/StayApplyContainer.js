import React, { Component } from 'react';

import './StayApplyContainer.scss'

import StayCardContainer from './StayCardContainer'
import ApplyAcceptBtn from '../../../component/Apply/content/ApplyAcceptBtn';

class StayApplyContainer extends Component {
    isChecked = false;

    render() {
        return (
            <div className = 'apply--stay--wrapper'>
                <p className = 'unselectable apply--title'>잔류 신청</p>
                <StayCardContainer />
                {
                    this.isChecked && <div className = 'apply--extension--accept--btnlist'>
                        <ApplyAcceptBtn type = 'apply--extension--cancle--btn' title = '취소'/>
                        <ApplyAcceptBtn type = 'apply--extension--accept--btn' title = '신청'/>
                    </div>
            }
                
            </div>
        )
    }
}

export default StayApplyContainer;