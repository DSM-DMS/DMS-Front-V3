import { FACILITY_REQUEST } from '../actions'

const initialState = {
    facilityReportList : [
        
    ]
}

function facility (state = initialState, action) {
    switch(action.type) {
        case FACILITY_REQUEST:
            return {
                ...action.responseData
            };
        default:
            return state;
    }
}

export default facility