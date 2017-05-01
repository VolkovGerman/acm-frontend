import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

import {FETCH_COMPETITIONS_REQUEST} from '../actions-types/competitions';

function fetchCompetitionsRequest() {
    return {
        type: FETCH_COMPETITIONS_REQUEST
    }
}

import {FETCH_COMPETITIONS_SUCCESS} from '../actions-types/competitions';

function fetchCompetitionsSuccess(payload) {
    return {
        type: FETCH_COMPETITIONS_SUCCESS,
        payload
    }
}

import {FETCH_COMPETITIONS_FAILURE} from '../actions-types/competitions';

function fetchCompetitionsFailure(payload) {
    return {
        type: FETCH_COMPETITIONS_FAILURE,
        payload
    }
}

export function handleLoadingCompetitions() {
    return function (dispatch) {
        dispatch(fetchCompetitionsRequest());

        return fetch(`${config.server}/api/competitions`)
            .then(response => response.json())
            .then(json => dispatch(fetchCompetitionsSuccess(json)))
            .catch(err => dispatch(fetchCompetitionsFailure(err)));
    }
}
