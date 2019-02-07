import { SET_MODAL } from '../actions/ActionTypes';

const initialState = {
  modalState: '',
};

function modal(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, modalState: action.modalState };
    default:
      return state;
  }
}

export default modal;
