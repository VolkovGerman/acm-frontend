import {SET_LANG} from '../actions-types/langs';

function initLang(lang) {
    return {
        type: SET_LANG,
        payload: lang
    }
}

export function handleInitLang(lang) {
    return function (dispatch) {
        dispatch(initLang(lang));
    }
}
