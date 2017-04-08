import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

import { FETCH_NEWS_REQUEST } from '../actions-types/news';

function fetchNewsRequest() {
    return {
        type: FETCH_NEWS_REQUEST
    }
}

import { FETCH_NEWS_SUCCESS } from '../actions-types/news';

function fetchNewsSuccess(payload) {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload
    }
}

import { FETCH_NEWS_FAILURE } from '../actions-types/news';

function fetchNewsFailure(payload) {
    return {
        type: FETCH_NEWS_FAILURE,
        payload
    }
}

export function handleLoadingNews() {
    return function (dispatch) {
        dispatch(fetchNewsRequest());

        return fetch(`${config.server}/news`)
            .then(response => response.json())
            .then(json => dispatch(fetchNewsSuccess(json['_embedded']['news'])))
            .catch(err => dispatch(fetchNewsFailure(err)));
    }
}

