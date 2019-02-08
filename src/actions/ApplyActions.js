import * as types from './ActionTypes';

export const setExtensionRoom = (room) => ({
    type: types.SET_EXTENSION_ROOM,
    room
});

export const setGooutDate = (date) => ({
    type: types.SET_GOOUT_DATE,
    date
})

export const setStayType = (type) => ({
    type: types.SET_STAY_TYPE,
    stayType: type
})

export const setMusicDate = (date) => ({
    type: types.SET_MUSIC_DATE,
    date
});

export const selectGoingoutCard = (cardIndex) => ({
    type: types.SELECT_GOINGOUT_CARD,
    goingoutCard: cardIndex
});

export const selectMusicCard = (cardIndex) => ({
    type: types.SELECT_MUSIC_CARD,
    musicCard: cardIndex
});