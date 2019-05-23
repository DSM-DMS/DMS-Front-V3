import { combineReducers } from 'redux';

import ApplyTypeSwitch from './student/apply/ApplyTypeSwitch';
import ApplyCardSwitch from './student/apply/ApplyCardSwitch';
import domitoryrule from './domitoryRule';
import modal from './modal';
import facility from './facilityReport';
import adminLogin from './adminLogin';
import login from './login';
import meal from './meal';
import studentData from './studentData';

export default combineReducers({
  // 분할한 리듀서 사용
  // import를 통해서 불러오며 직관적인 데이터 관계가 없을 시 새로운 파일로 작성
  ApplyTypeSwitch,
  ApplyCardSwitch,
  domitoryrule,
  modal,
  facility,
  adminLogin,
  login,
  meal,
  studentData,
});
