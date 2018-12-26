// 예제 코드 실코드에서 삭제
import { INCREMENT, SET_DIFF } from "../actions";
import { Map, List } from "immutable";

const initialState = Map({
    value: 0,
    examList: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})

function counter(state=initialState, action) {
    const Lists = state.get('examList');
    switch(action.type) {
        case INCREMENT:
            return state.set('examList', Lists.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        case SET_DIFF:
            return state.set('value', action.diff);
        default:
            return state;
    }
}

export default counter;