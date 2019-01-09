import { SET_SECTION } from "../actions";

const initialState = {
    currentSection: "meal"
}

function scroll(state = initialState, action) {
    switch(action.type) {
        case SET_SECTION:
            return {...state, currentSection: action.currentSection}
        default:
            return state;
    }
}

export default scroll;