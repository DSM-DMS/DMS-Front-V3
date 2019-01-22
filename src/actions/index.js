export const SET_SECTION = 'SET_SECTION';

export const setSection = (value) => ({
    type: SET_SECTION,
    currentSection: value
});

export const SET_MODAL = 'SET_MODAL';

export const setModal = (value) => ({
    type: SET_MODAL,
    modalState: value
})

export const DOMITORY_RULE_LIST_ADD = 'DOMITORY_RULE_LIST_ADD';

export const domitoyRuleListAdd = ({ index, list }) => ({
    type: DOMITORY_RULE_LIST_ADD,
    index,
    list
})
