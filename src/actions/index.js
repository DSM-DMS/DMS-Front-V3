export const SET_SECTION = 'SET_SECTION';

export function setSection(value) {
    console.log(value);
    return {
        type: SET_SECTION,
        currentSection: value
    }
}


// 아래는 예제
export const INCREMENT = 'INCREMENT'; // 이와같이 액션 명 정의
export const SET_DIFF = 'SET_DIFF';

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