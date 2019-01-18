export const SET_SECTION = 'SET_SECTION';

export function setSection(value) {
    console.log(value);
    return {
        type: SET_SECTION,
        currentSection: value
    }
}