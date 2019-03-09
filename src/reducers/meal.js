import {
  SET_MEAL_PREV_DATE,
  SET_MEAL_NEXT_DATE,
  SET_MEAL,
} from '../actions/ActionTypes';

const initialState = {
  selectedDate: new Date(),
  breakfast: [],
  lunch: [],
  dinner: [],
};

function meal(state = initialState, action) {
  switch (action.type) {
    case SET_MEAL_PREV_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(state.selectedDate.getDate() - 1),
        ),
      };
    case SET_MEAL_NEXT_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(state.selectedDate.getDate() + 1),
        ),
      };
    case SET_MEAL:
      const { meal } = action;
      return {
        ...state,
        breakfast: meal.breakfast,
        lunch: meal.lunch,
        dinner: meal.dinner,
      };
    default:
      return state;
  }
}

export default meal;
