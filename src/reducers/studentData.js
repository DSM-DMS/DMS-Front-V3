import {
  SET_STUDENT_BASIC_DATA,
  SET_STUDENT_POINT_DATA,
  RESET_STUDENT_DATA,
} from '../actions/ActionTypes';

const initialState = {
  grade: 2,
  classroom: 1,
  number: 4,
  name: '조민규 바보',
  goodPoint: 15,
  badPoint: 19,
  penaltyLevel: '2',
  penaltyStatus: true,
  advice: '긴장타세요 퇴사가 코앞입니다.',
  pointHistory: [],
};

function studentData(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENT_BASIC_DATA:
      const { basicData } = action;
      const studentNum = basicData.number;
      return {
        ...state,
        badPoint: basicData.badPoint,
        goodPoint: basicData.goodPoint,
        name: basicData.name,
        grade: parseInt(studentNum / 1000),
        classroom: parseInt((studentNum % 1000) / 100),
        number: parseInt((studentNum % 1000) % 100),
        penaltyLevel: basicData.penaltyLevel,
        penaltyStatus: basicData.penaltyStatus,
        advice: basicData.advice,
      };
    case SET_STUDENT_POINT_DATA:
      const { pointData } = action;
      return { ...state, pointHistory: pointData };
    case RESET_STUDENT_DATA:
      return {
        grade: 2,
        classroom: 1,
        number: 4,
        name: '조민규 바보',
        goodPoint: 15,
        badPoint: 19,
        penaltyLevel: '2',
        penaltyStatus: true,
        advice: '긴장타세요 퇴사가 코앞입니다.',
        pointHistory: [],
      };
    default:
      return state;
  }
}

export default studentData;
