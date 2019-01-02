import { SET_SCROLL } from "../actions";
import { Map } from "immutable";

const initialState = Map({
    scroll: "meal"
})

function scroll(state = initialState, action) {
    switch(action.type) {
        case SET_SCROLL:
            return state.set('scroll', action.scroll);
        default:
            return state;
    }
}

export default scroll;