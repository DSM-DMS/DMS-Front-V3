import React, { Component, Fragment } from 'react';
import axios from 'axios'

import Fix from '../../component/Fix/Fix';

import FixList from '../../component/Fix/FixList';
import Loading from '../../common/Loading/Loading'

import { connect } from 'react-redux'
import { facilityRequest } from '../../../actions/index'
import { getCookie } from '../../../lib/cookie'

class FixContainer extends Component {
    state = {
        loading : true
    }

    componentDidMount = async () => {
        try {
        const token = getCookie('JWT')
        const response = await axios
            .get("https://admin-api.dms.istruly.sexy/facility_report", 
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data !== "") {
                this.props.facilityRequest(
                    response.data
                )
                this.setState({
                    loading : false
                })
            }
        } catch(err) {
            alert('로그인이 필요합니다')
            this.props.history.push('/admin/login')
        }
    }

    HandleRemove = async (id) => {
        const token = getCookie('JWT')
        axios.delete("https://admin-api.dms.istruly.sexy/facility_report", 
            {
                reportId : id,
                headers : {
                    Authorization: `Bearer ${token}`
            }
        })
        .then(async res => {
            const response = await axios
            .get("https://admin-api.dms.istruly.sexy/facility_report", 
            {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data !== "") {
                this.props.facilityRequest(
                    response.data
                )
                this.setState({
                    loading : false
                })
            }
        })
}


    render() {
        const { facilityReportList } = this.props;
        const { loading } = this.state;
        const fixList = facilityReportList.map(data =>
            <FixList onDelete = {this.HandleRemove} data = {data} key = {data.reportId} />
        )
        return (
            <Fragment>
                {
                    loading && <Loading />
                }
                <Fix fixList = {fixList}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => (
    state.facility
)

const mapDispatchToProps = dispatch => ({
    facilityRequest : (responseData) => dispatch(facilityRequest(responseData))
})

export default connect(mapStateToProps, mapDispatchToProps)(FixContainer);