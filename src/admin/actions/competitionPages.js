import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/competitionPages';

function fetchCompetitionPagesRequest() {
    return {
        type: actionTypes.FETCH_COMPETITION_PAGES_REQUEST
    }
}

function fetchCompetitionPagesSuccess() {
    return {
        type: actionTypes.FETCH_COMPETITION_PAGES_SUCCESS
    }
}

function fetchCurrentCompetitionPagesSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_COMPETITION_PAGES_SUCCESS,
        payload
    }
}

function fetchCompetitionPagesFailure(payload) {
    return {
        type: actionTypes.FETCH_COMPETITION_PAGES_FAILURE,
        payload
    }
}

function setCompetitionPagesTableData(payload) {
    return {
        type: actionTypes.SET_COMPETITION_PAGES_TABLE_DATA,
        payload
    }
}

function setCompetitionPagesTableFields(payload) {
    return {
        type: actionTypes.SET_COMPETITION_PAGES_TABLE_FIELDS,
        payload
    }
}

function postCompetitionPageRequest() {
    return {
        type: actionTypes.POST_COMPETITION_PAGE_REQUEST
    }
}

function postCompetitionPageSuccess(payload) {
    return {
        type: actionTypes.POST_COMPETITION_PAGE_SUCCESS,
        payload
    }
}

function postCompetitionPageFailure(payload) {
    return {
        type: actionTypes.POST_COMPETITION_PAGE_FAILURE,
        payload
    }
}

function putCompetitionPageRequest() {
    return {
        type: actionTypes.PUT_COMPETITION_PAGE_REQUEST
    }
}

function putCompetitionPageSuccess(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_PAGE_SUCCESS,
        payload
    }
}

function putCompetitionPageFailure(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_PAGE_FAILURE,
        payload
    }
}

function deleteCompetitionPagesRequest() {
    return {
        type: actionTypes.DELETE_COMPETITION_PAGES_REQUEST,
    }
}

function deleteCompetitionPagesSuccess(payload) {
    return {
        type: actionTypes.DELETE_COMPETITION_PAGES_SUCCESS,
        payload
    }
}

function deleteCompetitionPagesFailure(payload) {
    return {
        type: actionTypes.DELETE_COMPETITION_PAGES_FAILURE,
        payload
    }
}

export function flushCompetitionPage() {
    return {
        type: actionTypes.FLUSH_COMPETITION_PAGE
    }
}

export function handleLoadingCompetitionPages(competition_id, section_id) {
    return function (dispatch) {
        dispatch(fetchCompetitionPagesRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${section_id}/pages`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название'
                ];
                dispatch(setCompetitionPagesTableFields(tableFields));
                const tableData = json.map(_ => {
                    return {
                        id: _.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/dashboard/competitions/${competition_id}/sections/${section_id}/pages/update?id=${_.id}`
                            }
                        ],
                        cells: [
                            _.title.ru
                        ]
                    }
                });
                dispatch(setCompetitionPagesTableData(tableData));
                dispatch(fetchCompetitionPagesSuccess())
            })
            .catch(err => dispatch(fetchCompetitionPagesFailure(err)));
    }
}

export function handleLoadingCurrentCompetitionPage(competition_id, section_id, id) {
    return function (dispatch) {
        dispatch(fetchCompetitionPagesRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${section_id}/pages/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentCompetitionPagesSuccess(json)))
            .catch(err => dispatch(fetchCompetitionPagesFailure(err)));
    }
}

export function handlePostCompetitionPage(competition_id, section_id, body) {
    return function (dispatch) {
        dispatch(postCompetitionPageRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${section_id}/pages`, {
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
                dispatch(postCompetitionPageSuccess(json));
                browserHistory.push(`/dashboard/competitions/${competition_id}/sections/${section_id}/pages`);
            })
            .catch(err => dispatch(postCompetitionPageFailure(err)));
    }
}

export function handlePutCompetitionPage(competition_id, section_id, id, body) {
    return function (dispatch) {
        dispatch(putCompetitionPageRequest());

        return fetch(`${config.server}/api/competitions/${competition_id}/sections/${section_id}/pages/${id}`, {
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
                dispatch(putCompetitionPageSuccess(json));
                browserHistory.push(`/dashboard/competitions/${competition_id}/sections/${section_id}/pages`);
            })
            .catch(err => dispatch(putCompetitionPageFailure(err)));
    }
}

export function handleDeleteCompetitionPages(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteCompetitionPagesRequest());

            return fetch(`${config.server}/api/competitions/competition_id/sections/section_id/pages`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteCompetitionPagesSuccess(json)))
                .catch(err => dispatch(deleteCompetitionPagesFailure(err)));
        }
    }
}
