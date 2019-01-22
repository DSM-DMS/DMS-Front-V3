import * as actions from '../../../../actions/ApplyActions';
import reducer from '../ApplyTypeSwitch';

describe('apply type switch reducer', () => {
    let state = reducer(undefined, {});
    it('should returnn initial state', () => {
        expect(state).toEqual({
            room: '가온실',
            gooutDate: '토요일',
            stayType: '',
            musicDate: '월요일'
        });
    });
    it('should set extension room', () => {
        state = reducer(state, actions.setExtensionRoom('가온실'));
        expect(state).toHaveProperty('room', '가온실');
    });
    it('should set goingout date', () => {
        state = reducer(state, actions.setGooutDate('토요일'));
        expect(state).toHaveProperty('gooutDate', '토요일');
    });
    it('should set stay type', () => {
        state = reducer(state, actions.setStayType('귀가'));
        expect(state).toHaveProperty('stayType', '귀가');
    });
    it('should set music date', () => {
        state = reducer(state, actions.setMusicDate('월요일'));
        expect(state).toHaveProperty('musicDate', '월요일');
    });
});
