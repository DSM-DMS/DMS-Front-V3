import * as types from '../../../actions/ActionTypes';

const initialState = {
    goingoutCard: null,
    musicCard: null
}

export default (state = initialState, action) => {
  switch(action.type) {
        case types.SELECT_GOINGOUT_CARD:
            return {
                ...state,
                goingoutCard: action.goingoutCard
            };
        case types.SELECT_MUSIC_CARD:
            return {
                ...state,
                musicCard: action.musicCard
            };
        default:
            return {
                ...state
            };
    }
};
