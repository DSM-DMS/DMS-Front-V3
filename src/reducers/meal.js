import {
  SET_MEAL,
  SET_MEAL_DATE,
} from '../actions/ActionTypes';

const initialState = {
  selectedDate: new Date(),
  meal: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
};

function meal(state = initialState, action) {
  switch (action.type) {
    case SET_MEAL_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(
            state.selectedDate.getDate() + action.date,
          ),
        ),
      };
    case SET_MEAL:
      return {
        ...state,
        meal: action.mealObj,
      };
    default:
      return state;
  }
}

export default meal;
