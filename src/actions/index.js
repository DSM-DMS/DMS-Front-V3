import * as types from './ActionTypes';

export const SET_SECTION = 'SET_SECTION';

export function setSection(value) {
    console.log(value);
    return {
        type: SET_SECTION,
        currentSection: value
    }
}

export const setExtensionRoom = (room) => ({
    type: types.SET_EXTENSION_ROOM,
    room
});

export const setGooutDate = (date) => ({
    type: types.SET_GOOUT_DATE,
    date
});

export const setStayType = (type) => ({
    type: types.SET_STAY_TYPE,
    stayType: type
})

export const setMusicDate = (date) => ({
    type: types.SET_MUSIC_DATE,
    date
});