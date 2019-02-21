import { IS_LOGIN, AUTO_LOGIN } from '../actions/ActionTypes';

const initialState = {
  isLogin: false,
  id: '',
  pw: '',
};

function isLogin(state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: action.bool };
    case AUTO_LOGIN:
      return { ...state, id: action.id, pw: action.pw };
    default:
      return state;
  }
}

export default isLogin;
