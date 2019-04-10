import {
  SET_MEAL_PREV_DATE,
  SET_MEAL_NEXT_DATE,
  SET_MEAL,
} from '../actions/ActionTypes';

const initialState = {
  selectedDate: new Date(),
  prevMeal: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
  currentMeal: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
  nextMeal: {
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
        prevMeal: action.meal,
        currentMeal: { ...state.prevMeal },
        nextMeal: { ...state.currentMeal },
      };
    case SET_MEAL_NEXT_DATE:
      return {
        ...state,
        selectedDate: new Date(
          state.selectedDate.setDate(state.selectedDate.getDate() + 1),
        ),
        prevMeal: { ...state.currentMeal },
        currentMeal: { ...state.nextMeal },
        nextMeal: action.meal,
      };
    case SET_MEAL:
      return {
        ...state,
        [action.when]: action.mealObj,
      };
    default:
      return state;
  }
}

export default meal;
