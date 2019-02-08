import { IS_LOGIN } from '../actions/ActionTypes';

const initialState = {
  isLogin: false,
};

function isLogin(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: action.bool };
    default:
      return state;
  }
}

export default isLogin;
