export const SET_SECTION = 'SET_SECTION';

export function setSection(value) {
    return {
        type: SET_SECTION,
        currentSection: value
    }
}


export const SET_MODAL = 'SET_MODAL';

export function setModal(value) {
    return {
        type: SET_MODAL,
        modalState: value
    }
}

// 아래는 예제
export const INCREMENT = 'INCREMENT'; // 이와같이 액션 명 정의
export const SET_DIFF = 'SET_DIFF';
export const DOMITORY_RULE_LIST_ADD = 'DOMITORY_RULE_LIST_ADD';
export const FACILITY_REQUEST = 'FACILITY_REQUEST'
export const LOGIN = 'LOGIN'

export function increment(value) {
    return {
        type: INCREMENT,
        index: value
    };
} // 22

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    }
} // dispatch 할때 인자를 호출하면

export function domitoyRuleListAdd({ index, list }) {
    return {
        type: DOMITORY_RULE_LIST_ADD,
        index,
        list
    }
}

export function facilityRequest(responseData) {
    return {
        type: FACILITY_REQUEST,
        responseData
    }
}

export function login(bool) {
    return {
        type: LOGIN,
        bool
    }
}