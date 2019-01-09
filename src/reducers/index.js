import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import counter from './counter';
import section from './section';
<<<<<<< HEAD
import domitoryrule from './domitoryRule';
=======
import modal from './modal';
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9


const dmsApp = (history) => combineReducers({
    counter,
    // 분할한 리듀서 사용 
    // import를 통해서 불러오며 직관적인 데이터 관계가 없을 시 새로운 파일로 작성
    section,
<<<<<<< HEAD
    domitoryrule,
=======
    modal,
>>>>>>> a78b4390810b356f1fca223edd605b069b6888e9
    router: connectRouter(history)
})

export default dmsApp;