import * as types from '../../../actions/ActionTypes';

const initialState = {
    room: '가온실',
    gooutDate: '토요일',
    stayType: '',
    musicDate: 'mon'
};

export default function ApplyTypeSwitch (state = initialState, action) {
    switch(action.type) {
        case types.SET_EXTENSION_ROOM:
            return {
                ...state,
                room: action.room
            };
        case types.SET_GOOUT_DATE:
            return {
                ...state,
                gooutDate: action.date
            };
        case types.SET_MUSIC_DATE:
            return {
                ...state,
                musicDate: action.date
            };
        case types.SET_STAY_TYPE:
            return {
                ...state,
                stayType: action.stayType
            }
        default:
            return state;
    }
};