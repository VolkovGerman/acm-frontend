import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/themes';

function fetchThemesRequest() {
    return {
        type: actionTypes.FETCH_THEMES_REQUEST
    }
}

function fetchThemesSuccess(payload) {
    return {
        type: actionTypes.FETCH_THEMES_SUCCESS,
        payload
    }
}

function fetchThemesFailure(payload) {
    return {
        type: actionTypes.FETCH_THEMES_FAILURE,
        payload
    }
}

function fetchCurrentThemeSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_THEME_SUCCESS,
        payload
    }
}

function setThemesTableData(payload) {
    return {
        type: actionTypes.SET_THEMES_TABLE_DATA,
        payload
    }
}

function setThemesTableFields(payload) {
    return {
        type: actionTypes.SET_THEMES_TABLE_FIELDS,
        payload
    }
}

function postThemeRequest() {
    return {
        type: actionTypes.POST_THEME_REQUEST
    }
}

function postThemeSuccess(payload) {
    return {
        type: actionTypes.POST_THEME_SUCCESS,
        payload
    }
}

function postThemeFailure(payload) {
    return {
        type: actionTypes.POST_THEME_FAILURE,
        payload
    }
}

function putThemeRequest() {
    return {
        type: actionTypes.PUT_THEME_REQUEST
    }
}

function putThemeSuccess(payload) {
    return {
        type: actionTypes.PUT_THEME_SUCCESS,
        payload
    }
}

function putThemeFailure(payload) {
    return {
        type: actionTypes.PUT_THEME_FAILURE,
        payload
    }
}

function deleteThemesRequest() {
    return {
        type: actionTypes.DELETE_THEMES_REQUEST,
    }
}

function deleteThemesSuccess(payload) {
    return {
        type: actionTypes.DELETE_THEMES_SUCCESS,
        payload
    }
}

function deleteThemesFailure(payload) {
    return {
        type: actionTypes.DELETE_THEMES_FAILURE,
        payload
    }
}

export function flushTheme() {
    return {
        type: actionTypes.FLUSH_THEME
    }
}

export function handleLoadingThemes() {
    return function (dispatch) {
        dispatch(fetchThemesRequest());

        return fetch(`${config.server}/api/themes`)
            .then(response => response.json())
            .then(json => {
                const themes = json.map(theme => {
                    return {
                        id: theme.id,
                        name: theme.name.ru
                    }
                });
                dispatch(fetchThemesSuccess(themes))
            })
            .catch(err => dispatch(fetchThemesFailure(err)));
    }
}

export function handleLoadingThemesList() {
    return function (dispatch) {
        dispatch(fetchThemesRequest());

        return fetch(`${config.server}/api/themes`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название rus',
                    'Название eng'
                ];
                dispatch(setThemesTableFields(tableFields));
                const tableData = json.map(_ => {
                    return {
                        id: _.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/db/themes/update?id=${_.id}`
                            }
                        ],
                        cells: [
                            _.name.ru,
                            _.name.en
                        ]
                    }
                });
                dispatch(setThemesTableData(tableData));
                dispatch(fetchThemesSuccess())
            })
            .catch(err => dispatch(fetchThemesFailure(err)));
    }
}

export function handleLoadingCurrentTheme(id) {
    return function (dispatch) {
        dispatch(fetchThemesRequest());

        return fetch(`${config.server}/api/themes/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentThemeSuccess(json)))
            .catch(err => dispatch(fetchThemesFailure(err)));
    }
}

export function handlePostTheme(body) {
    return function (dispatch) {
        dispatch(postThemeRequest());

        return fetch(`${config.server}/api/themes`, {
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
                dispatch(postThemeSuccess(json));
                browserHistory.push('/db/themes');
            })
            .catch(err => dispatch(postThemeFailure(err)));
    }
}

export function handlePutTheme(id, body) {
    return function (dispatch) {
        dispatch(putThemeRequest());

        return fetch(`${config.server}/api/themes/${id}`, {
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
                dispatch(putThemeSuccess(json));
                browserHistory.push('/db/themes');
            })
            .catch(err => dispatch(putThemeFailure(err)));
    }
}

export function handleDeleteThemes(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteThemesRequest());

            return fetch(`${config.server}/api/themes`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteThemesSuccess(json)))
                .catch(err => dispatch(deleteThemesFailure(err)));
        }
    }
}
