import React, { Component } from 'react';
import axios from 'axios'

import Fix from '../../component/Fix/Fix';

import FixList from '../../component/Fix/FixList';

import { connect } from 'react-redux'
import { facilityRequest } from '../../../actions/index'

class FixContainer extends Component {

    componentDidMount() {
        console.log(this.props)
        axios
            .get("http://ec2.istruly.sexy:5001/facility_report", 
            {
                headers : {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA2NjYzMjMsIm5iZiI6MTU1MDY2NjMyMywianRpIjoiMTNkN2UyMWItZjdlNC00YTk5LThmZjQtMWVlZDc0ZTZkNmUwIiwiZXhwIjoxNTUwNjY3MjIzLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.XNDIct5X6ksgl-hZ4_iJoWYS9JHFiaxFUps9kwiHG1I`
                }
            })
            .then(response => {
                console.log(response)
                if (response.status === 200 && response.data !== "") {
                    console.log(response)
                    this.props.facilityRequest(
                        response.data
                    )
                    console.log(this.props)
                }
            })

            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { facilityReportList } = this.props;
        const fixList = facilityReportList.map(data =>
            <FixList data = {data} key = {data.reportId} />
        )
        return (
            <Fix fixList = {fixList}/>
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