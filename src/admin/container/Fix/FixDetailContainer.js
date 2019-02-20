import React, { Component } from 'react';
import FixDetail from '../../component/Fix/FixDetail';

import { connect } from 'react-redux'

class FixDetailContainer extends Component {

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
            <FixDetail index = {index} lastIndex = {lastIndex} data = {facilityReportList}/>
        );
    }
}

const mapStateToProps = state=> ({
    ...state.facility
})

export default connect(mapStateToProps)(FixDetailContainer);