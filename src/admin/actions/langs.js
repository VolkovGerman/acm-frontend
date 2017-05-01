import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

import * as actionTypes from '../actions-types/langs';

function fetchLangsRequest() {
    return {
        type: actionTypes.FETCH_LANGS_REQUEST
    }
}

function fetchLangsSuccess(payload) {
    return {
        type: actionTypes.FETCH_LANGS_SUCCESS,
        payload
    }
}

function fetchLangsFailure(payload) {
    return {
        type: actionTypes.FETCH_LANGS_FAILURE,
        payload
    }
}

export function handleLoadingNews() {
    return function (dispatch) {
        dispatch(fetchLangsRequest());

        return fetch(`${config.server}/api/langs`)
            .then(response => response.json())
            .then(json => dispatch(fetchLangsSuccess()))
            .catch(err => dispatch(fetchLangsFailure(err)));
    }
}
