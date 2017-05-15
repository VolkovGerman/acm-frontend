import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/competitionSections';

function fetchCompetitionSectionsRequest() {
    return {
        type: actionTypes.FETCH_COMPETITION_SECTIONS_REQUEST
    }
}

function fetchCompetitionSectionsSuccess() {
    return {
        type: actionTypes.FETCH_COMPETITION_SECTIONS_SUCCESS
    }
}

function fetchCurrentCompetitionSectionsSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_COMPETITION_SECTIONS_SUCCESS,
        payload
    }
}

function fetchCompetitionSectionsFailure(payload) {
    return {
        type: actionTypes.FETCH_COMPETITION_SECTIONS_FAILURE,
        payload
    }
}

function setCompetitionSectionsTableData(payload) {
    return {
        type: actionTypes.SET_COMPETITION_SECTIONS_TABLE_DATA,
        payload
    }
}

function setCompetitionSectionsTableFields(payload) {
    return {
        type: actionTypes.SET_COMPETITION_SECTIONS_TABLE_FIELDS,
        payload
    }
}

function postCompetitionSectionRequest() {
    return {
        type: actionTypes.POST_COMPETITION_SECTION_REQUEST
    }
}

function postCompetitionSectionSuccess(payload) {
    return {
        type: actionTypes.POST_COMPETITION_SECTION_SUCCESS,
        payload
    }
}

function postCompetitionSectionFailure(payload) {
    return {
        type: actionTypes.POST_COMPETITION_SECTION_FAILURE,
        payload
    }
}

function putCompetitionSectionRequest() {
    return {
        type: actionTypes.PUT_COMPETITION_SECTION_REQUEST
    }
}

function putCompetitionSectionSuccess(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_SECTION_SUCCESS,
        payload
    }
}

function putCompetitionSectionFailure(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_SECTION_FAILURE,
        payload
    }
}

function deleteCompetitionSectionsRequest() {
    return {
        type: actionTypes.DELETE_COMPETITION_SECTIONS_REQUEST,
    }
}

function deleteCompetitionSectionsSuccess(payload) {
    return {
        type: actionTypes.DELETE_COMPETITION_SECTIONS_SUCCESS,
        payload
    }
}

function deleteCompetitionSectionsFailure(payload) {
    return {
        type: actionTypes.DELETE_COMPETITION_SECTIONS_FAILURE,
        payload
    }
}

export function flushCompetitionSection() {
    return {
        type: actionTypes.FLUSH_COMPETITION_SECTION
    }
}

export function handleLoadingCompetitionSections(competition_id) {
    return function (dispatch) {
        dispatch(fetchCompetitionSectionsRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название'
                ];
                dispatch(setCompetitionSectionsTableFields(tableFields));
                const tableData = json.map(_ => {
                    return {
                        id: _.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/dashboard/competitions/${competition_id}/sections/update?id=${_.id}`
                            },
                            {
                                name: 'Страницы',
                                link: `/dashboard/competitions/${competition_id}/sections/${_.id}/pages`
                            }
                        ],
                        cells: [
                            _.title.ru
                        ]
                    }
                });
                dispatch(setCompetitionSectionsTableData(tableData));
                dispatch(fetchCompetitionSectionsSuccess())
            })
            .catch(err => dispatch(fetchCompetitionSectionsFailure(err)));
    }
}

export function handleLoadingCurrentCompetitionSection(competition_id, id) {
    return function (dispatch) {
        dispatch(fetchCompetitionSectionsRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentCompetitionSectionsSuccess(json)))
            .catch(err => dispatch(fetchCompetitionSectionsFailure(err)));
    }
}

export function handlePostCompetitionSection(competition_id, body) {
    return function (dispatch) {
        dispatch(postCompetitionSectionRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                dispatch(postCompetitionSectionSuccess(json));
                browserHistory.push(`/dashboard/competitions/${competition_id}/sections`);
            })
            .catch(err => dispatch(postCompetitionSectionFailure(err)));
    }
}

export function handlePutCompetitionSection(competition_id, id, body) {
    return function (dispatch) {
        dispatch(putCompetitionSectionRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${id}`, {
            method: 'PUT',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                dispatch(putCompetitionSectionSuccess(json));
                browserHistory.push(`/dashboard/competitions/${competition_id}/sections`);
            })
            .catch(err => dispatch(putCompetitionSectionFailure(err)));
    }
}

export function handleDeleteCompetitionSections(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteCompetitionSectionsRequest());

            return fetch(`${config.server}/api/competitions/competition_id/sections`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteCompetitionSectionsSuccess(json)))
                .catch(err => dispatch(deleteCompetitionSectionsFailure(err)));
        }
    }
}
