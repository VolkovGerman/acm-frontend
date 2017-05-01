import * as actionTypes from '../actions-types/interfaces';

const initialState = {
    activeMenu: true,
    pageTitle: ''
};

export default function interfaces(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                activeMenu: !state.activeMenu
            };

        case actionTypes.SET_PAGE_TITLE:
            return {
                ...state,
                pageTitle: action.payload,
            };

        default:
            return state;
    }
}
