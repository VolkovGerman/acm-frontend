import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/competitions';
import transform from '../libs/transform';

function fetchCompetitionsRequest() {
    return {
        type: actionTypes.FETCH_COMPETITIONS_REQUEST
    }
}

function fetchCompetitionsSuccess() {
    return {
        type: actionTypes.FETCH_COMPETITIONS_SUCCESS
    }
}

function fetchCurrentCompetitionsSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_COMPETITIONS_SUCCESS,
        payload
    }
}

function fetchCompetitionsFailure(payload) {
    return {
        type: actionTypes.FETCH_COMPETITIONS_FAILURE,
        payload
    }
}

function setCompetitionsTableData(payload) {
    return {
        type: actionTypes.SET_COMPETITIONS_TABLE_DATA,
        payload
    }
}

function setCompetitionsTableFields(payload) {
    return {
        type: actionTypes.SET_COMPETITIONS_TABLE_FIELDS,
        payload
    }
}

function postCompetitionRequest() {
    return {
        type: actionTypes.POST_COMPETITION_REQUEST
    }
}

function postCompetitionSuccess(payload) {
    return {
        type: actionTypes.POST_COMPETITION_SUCCESS,
        payload
    }
}

function postCompetitionFailure(payload) {
    return {
        type: actionTypes.POST_COMPETITION_FAILURE,
        payload
    }
}

function putCompetitionRequest() {
    return {
        type: actionTypes.PUT_COMPETITION_REQUEST
    }
}

function putCompetitionSuccess(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_SUCCESS,
        payload
    }
}

function putCompetitionFailure(payload) {
    return {
        type: actionTypes.PUT_COMPETITION_FAILURE,
        payload
    }
}

function deleteCompetitionsRequest() {
    return {
        type: actionTypes.DELETE_COMPETITIONS_REQUEST,
    }
}

function deleteCompetitionsSuccess(payload) {
    return {
        type: actionTypes.DELETE_COMPETITIONS_SUCCESS,
        payload
    }
}

function deleteCompetitionsFailure(payload) {
    return {
        type: actionTypes.DELETE_COMPETITIONS_FAILURE,
        payload
    }
}

export function flushCompetition() {
    return {
        type: actionTypes.FLUSH_COMPETITION
    }
}

export function handleLoadingCompetitions() {
    return function (dispatch) {
        dispatch(fetchCompetitionsRequest());

        return fetch(`${config.server}/api/competitions`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название',
                    'Год',
                    'Статус',
                    'Публикация',
                ];
                dispatch(setCompetitionsTableFields(tableFields));
                const tableData = json.map(_ => {
                    return {
                        id: _.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/competitions/update?id=${_.id}`
                            },
                            {
                                name: 'Секции',
                                link: `/competitions/${_.id}/sections`
                            }
                        ],
                        cells: [
                            _.title.ru,
                            _.year,
                            _.isOpen ? 'открыт' : 'закрыт',
                            transform.convertStatusToCountryFlag(_.status)
                        ]
                    }
                });
                dispatch(setCompetitionsTableData(tableData));
                dispatch(fetchCompetitionsSuccess())
            })
            .catch(err => dispatch(fetchCompetitionsFailure(err)));
    }
}

export function handleLoadingCurrentCompetition(id) {
    return function (dispatch) {
        dispatch(fetchCompetitionsRequest());

        return fetch(`${config.server}/api/competitions/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentCompetitionsSuccess(json)))
            .catch(err => dispatch(fetchCompetitionsFailure(err)));
    }
}

export function handlePostCompetition(body) {
    return function (dispatch) {
        dispatch(postCompetitionRequest());

        return fetch(`${config.server}/api/competitions`, {
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
                dispatch(postCompetitionSuccess(json));
                browserHistory.push('/competitions');
            })
            .catch(err => dispatch(postCompetitionFailure(err)));
    }
}

export function handlePutCompetition(id, body) {
    return function (dispatch) {
        dispatch(putCompetitionRequest());

        return fetch(`${config.server}/api/competitions/${id}`, {
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
                dispatch(putCompetitionSuccess(json));
                browserHistory.push('/competitions');
            })
            .catch(err => dispatch(putCompetitionFailure(err)));
    }
}

export function handleDeleteCompetitions(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteCompetitionsRequest());

            return fetch(`${config.server}/api/competitions`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteCompetitionsSuccess(json)))
                .catch(err => dispatch(deleteCompetitionsFailure(err)));
        }
    }
}
