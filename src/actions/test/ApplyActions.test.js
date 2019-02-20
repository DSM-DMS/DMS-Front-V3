import * as types from '../ActionTypes';
import * as applyActions from '../ApplyActions';

describe('Apply', () => {
    describe('actions creators', () => {
        it('should create actions', () => {
            const expectedActions = [
                { 
                    type: types.SET_EXTENSION_ROOM,
                    room: '가온실'
                },
                {
                    type: types.SET_GOOUT_DATE,
                    date: '토요일'
                },
                {
                    type: types.SET_STAY_TYPE,
                    stayType: ''
                },
                {
                    type: types.SET_MUSIC_DATE,
                    date: '월요일'
                },
                {
                    type: types.SELECT_GOINGOUT_CARD,
                    goingoutCard: null
                },
                {
                    type: types.SELECT_MUSIC_CARD,
                    musicCard: null
                }
            ];
            const actions = [
                applyActions.setExtensionRoom('가온실'),
                applyActions.setGooutDate('토요일'),
                applyActions.setStayType(''),
                applyActions.setMusicDate('월요일'),
                applyActions.selectGoingoutCard(null),
                applyActions.selectMusicCard(null)
            ];
            expect(actions).toEqual(expectedActions);
        });
    });
})
