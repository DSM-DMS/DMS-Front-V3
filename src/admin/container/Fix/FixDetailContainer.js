import React, { Component, Fragment } from 'react';
import FixDetail from '../../component/Fix/FixDetail';

import { connect } from 'react-redux'

class FixDetailContainer extends Component {
    componentDidMount = () => {
        if(this.props.login.isLogin === false) {
            alert('로그인이 필요합니다')
            this.props.history.push('/admin/login')
        }
    }


    render() {
        const { match, facilityReportList } = this.props;
        const id = match.params.uri
        const lastIndex = facilityReportList.length - 1
        const index = facilityReportList.findIndex(
            data => {
                return data.reportId === parseInt(id)
            }
        )

        return (
            <Fragment>
            {   this.props.login.isLogin &&
                <FixDetail index = {index} lastIndex = {lastIndex} data = {facilityReportList}/>
            }
            </Fragment>
        );
    }
}

const mapStateToProps = state=> ({
    ...state.facility,
    login : state.adminLogin
})

export default connect(mapStateToProps)(FixDetailContainer);