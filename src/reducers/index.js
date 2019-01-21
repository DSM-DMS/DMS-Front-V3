import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import section from './section';
import ApplyTypeSwitch from './student/apply/ApplyTypeSwitch';
import ApplyCardSwitch from './student/apply/ApplyCardSwitch';
import domitoryrule from './domitoryRule';
import modal from './modal';


const dmsApp = (history) => combineReducers({
    // 분할한 리듀서 사용 
    // import를 통해서 불러오며 직관적인 데이터 관계가 없을 시 새로운 파일로 작성
    section,
    ApplyTypeSwitch,
    ApplyCardSwitch,
    domitoryrule,
    modal,
    router: connectRouter(history)
})

export default dmsApp;