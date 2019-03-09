import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import counter from './counter';
import section from './section';
import domitoryrule from './domitoryRule';
import modal from './modal';
import facility from './facilityReport';
import adminLogin from './adminLogin';


const dmsApp = (history) => combineReducers({
    counter,
    // 분할한 리듀서 사용 
    // import를 통해서 불러오며 직관적인 데이터 관계가 없을 시 새로운 파일로 작성
    section,
    domitoryrule,
    modal,
    facility,
    adminLogin,
    router: connectRouter(history)
})

export default dmsApp;