import { LOGIN } from '../actions';

const initialState = {
  isLogin: false,
};

function AdminLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { isLogin: action.bool };
    default:
      return state;
  }
}

export default AdminLogin;
