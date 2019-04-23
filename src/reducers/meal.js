import {
  SET_MEAL_PREV_DATE,
  SET_MEAL_NEXT_DATE,
  SET_MEAL,
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
    case SET_MEAL_PREV_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(state.selectedDate.getDate() - 1),
        ),
        meal: action.mealObj,
      };
    case SET_MEAL_NEXT_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(state.selectedDate.getDate() + 1),
        ),
        meal: action.mealObj,
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
