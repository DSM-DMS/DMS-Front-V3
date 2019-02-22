import * as types from './ActionTypes';

export const setSection = value => ({
  type: types.SET_SECTION,
  currentSection: value,
});

export const isLogin = bool => ({
  type: types.IS_LOGIN,
  bool: bool,
});

export const autoLogin = data => ({
  type: types.AUTO_LOGIN,
  id: data.id,
  pw: data.pw,
});

export const mealPrevDate = () => ({
  type: types.SET_MEAL_PREV_DATE,
});

export const mealNextDate = () => ({
  type: types.SET_MEAL_NEXT_DATE,
});

export const setMeal = meal => ({
  type: types.SET_MEAL,
  meal: meal,
});

export const setStudentBasicData = basicData => ({
  type: types.SET_STUDENT_BASIC_DATA,
  basicData: basicData,
});

export const setStudentPointData = pointData => ({
  type: types.SET_STUDENT_POINT_DATA,
  pointData: pointData,
});

export const resetStudentData = () => ({
  type: types.RESET_STUDENT_DATA,
});

export const setExtensionRoom = room => ({
  type: types.SET_EXTENSION_ROOM,
  room,
});

export const setGooutDate = date => ({
  type: types.SET_GOOUT_DATE,
  date,
});

export const setModal = value => ({
  type: types.SET_MODAL,
  modalState: value,
});

export const setStayType = type => ({
  type: types.SET_STAY_TYPE,
  stayType: type,
});

export const setMusicDate = date => ({
  type: types.SET_MUSIC_DATE,
  date,
});

export const selectGoingoutCard = cardIndex => ({
  type: types.SELECT_GOINGOUT_CARD,
  goingoutCard: cardIndex,
});

export const selectMusicCard = cardIndex => ({
  type: types.SELECT_MUSIC_CARD,
  musicCard: cardIndex,
});

export const DOMITORY_RULE_LIST_ADD = 'DOMITORY_RULE_LIST_ADD';

export const domitoyRuleListAdd = ({ index, list }) => ({
  type: DOMITORY_RULE_LIST_ADD,
  index,
  list,
});
