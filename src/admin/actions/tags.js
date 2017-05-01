import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

import * as actionTypes from '../actions-types/tags';

function fetchTagsRequest() {
    return {
        type: actionTypes.FETCH_TAGS_REQUEST
    }
}

function fetchTagsSuccess(payload) {
    return {
        type: actionTypes.FETCH_TAGS_SUCCESS,
        payload
    }
}

function fetchTagsFailure(payload) {
    return {
        type: actionTypes.FETCH_TAGS_FAILURE,
        payload
    }
}

export function handleLoadingNews() {
    return function (dispatch) {
        dispatch(fetchTagsRequest());

        return fetch(`${config.server}/api/tags`)
            .then(response => response.json())
            .then(json => dispatch(fetchTagsSuccess()))
            .catch(err => dispatch(fetchTagsFailure(err)));
    }
}
