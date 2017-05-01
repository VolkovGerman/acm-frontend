import * as actionTypes from '../actions-types/interfaces';

export function toggleMenu() {
    return {
        type: actionTypes.TOGGLE_MENU
    }
}

export function setPageTitle(payload) {
    return {
        type: actionTypes.SET_PAGE_TITLE,
        payload
    }
}
