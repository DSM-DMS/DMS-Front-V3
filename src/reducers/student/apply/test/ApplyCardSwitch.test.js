import * as actions from '../../../../actions/ApplyActions';
import reducer from '../ApplyCardSwitch';

describe('apply card switch reducer', () => {
    let state = reducer(undefined, {});
    it('should return initial state', () => {
        expect(state).toEqual({
            goingoutCard: null,
            musicCard: null
        });
    });
    it('should change goingout card', () => {
        state = reducer(state, actions.selectGoingoutCard(1));
        expect(state).toHaveProperty('goingoutCard', 1);
    });
    it('should change music card', () => {
        state = reducer(state, actions.selectMusicCard(1));
        expect(state).toHaveProperty('musicCard', 1);
    })
})
