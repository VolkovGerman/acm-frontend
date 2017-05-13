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

import {FETCH_COMPETITION_SECTIONS_REQUEST} from '../actions-types/competitions';

function fetchCompetitionSectionsRequest() {
    return {
        type: FETCH_COMPETITION_SECTIONS_REQUEST
    }
}

import {FETCH_COMPETITION_SECTIONS_SUCCESS} from '../actions-types/competitions';

function fetchCompetitionSectionsSuccess(payload) {
    return {
        type: FETCH_COMPETITION_SECTIONS_SUCCESS,
        payload
    }
}

import {FETCH_COMPETITION_SECTIONS_FAILURE} from '../actions-types/competitions';

function fetchCompetitionSectionsFailure(payload) {
    return {
        type: FETCH_COMPETITION_SECTIONS_FAILURE,
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

export function handleLoadingCompetitionSections(id) {
    return function (dispatch) {
        dispatch(fetchCompetitionSectionsRequest());

        return fetch(`${config.server}/api/competitions/${id}/sections-with-pages`)
            .then(response => response.json())
            .then(json => dispatch(fetchCompetitionSectionsSuccess({ data: json, id })))
            .catch(err => dispatch(fetchCompetitionSectionsFailure(err)));
    }
}

export function handleLoadingCompetitionThenSections(systemName) {
    return function (dispatch) {
        dispatch(fetchCompetitionsRequest());

        return fetch(`${config.server}/api/competitions`)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchCompetitionsSuccess(json));

                dispatch(fetchCompetitionSectionsRequest());

                const id = json.filter(_ => _.systemName === systemName)[0].id;
                fetch(`${config.server}/api/competitions/${id}/sections-with-pages`)
                    .then(response => response.json())
                    .then(jsonSections => {
                        
                        dispatch(fetchCompetitionSectionsSuccess({
                            data: jsonSections,
                            id
                        }));
                    })
                    .catch(err => dispatch(fetchCompetitionSectionsFailure(err)));
            })
            .catch(err => dispatch(fetchCompetitionsFailure(err)));
    }
}
