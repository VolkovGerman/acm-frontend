import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/news';
import transform from '../libs/transform';

function fetchNewsRequest() {
    return {
        type: actionTypes.FETCH_NEWS_REQUEST
    }
}

function fetchNewsSuccess() {
    return {
        type: actionTypes.FETCH_NEWS_SUCCESS
    }
}

function fetchCurrentNewsSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_NEWS_SUCCESS,
        payload
    }
}

function fetchNewsFailure(payload) {
    return {
        type: actionTypes.FETCH_NEWS_FAILURE,
        payload
    }
}

function setNewsTableData(payload) {
    return {
        type: actionTypes.SET_NEWS_TABLE_DATA,
        payload
    }
}

function setNewsTableFields(payload) {
    return {
        type: actionTypes.SET_NEWS_TABLE_FIELDS,
        payload
    }
}

function postNewsRequest() {
    return {
        type: actionTypes.POST_NEWS_REQUEST
    }
}

function postNewsSuccess(payload) {
    return {
        type: actionTypes.POST_NEWS_SUCCESS,
        payload
    }
}

function postNewsFailure(payload) {
    return {
        type: actionTypes.POST_NEWS_FAILURE,
        payload
    }
}

function putNewsRequest() {
    return {
        type: actionTypes.PUT_NEWS_REQUEST
    }
}

function putNewsSuccess(payload) {
    return {
        type: actionTypes.PUT_NEWS_SUCCESS,
        payload
    }
}

function putNewsFailure(payload) {
    return {
        type: actionTypes.PUT_NEWS_FAILURE,
        payload
    }
}

function deleteNewsRequest() {
    return {
        type: actionTypes.DELETE_NEWS_REQUEST,
    }
}

function deleteNewsSuccess(payload) {
    return {
        type: actionTypes.DELETE_NEWS_SUCCESS
    }
}

function deleteNewsFailure(payload) {
    return {
        type: actionTypes.DELETE_NEWS_FAILURE,
        payload
    }
}

export function flushNews() {
    return {
        type: actionTypes.FLUSH_NEWS
    }
}

export function handleLoadingNews() {
    return function (dispatch) {
        dispatch(fetchNewsRequest());

        return fetch(`${config.server}/api/news`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название',
                    'Просмотры',
                    'Публикация'
                ];
                dispatch(setNewsTableFields(tableFields));
                const tableData = json.map(news => {
                    return {
                        id: news.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/dashboard/news/update?id=${news.id}`
                            }
                        ],
                        cells: [
                            news.title.ru,
                            news.views,
                            transform.convertStatusToCountryFlag(news.status)
                        ]
                    }
                });
                dispatch(setNewsTableData(tableData));
                dispatch(fetchNewsSuccess())
            })
            .catch(err => dispatch(fetchNewsFailure(err)));
    }
}

export function handleLoadingCurrentNews(id) {
    return function (dispatch) {
        dispatch(fetchNewsRequest());

        return fetch(`${config.server}/api/news/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentNewsSuccess(json)))
            .catch(err => dispatch(fetchNewsFailure(err)));
    }
}

export function handlePostNews(body) {
    return function (dispatch) {
        dispatch(postNewsRequest());

        return fetch(`${config.server}/api/news`, {
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
                dispatch(postNewsSuccess(json));
                browserHistory.push('/dashboard/news');
            })
            .catch(err => dispatch(postNewsFailure(err)));
    }
}

export function handlePutNews(id, body) {
    return function (dispatch) {
        dispatch(putNewsRequest());

        return fetch(`${config.server}/api/news/${id}`, {
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
                dispatch(putNewsSuccess(json));
                browserHistory.push('/dashboard/news');
            })
            .catch(err => dispatch(putNewsFailure(err)));
    }
}

export function handleDeleteNews(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteNewsRequest());

            return fetch(`${config.server}/api/news`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteNewsSuccess(json)))
                .catch(err => dispatch(deleteNewsFailure(err)));
        }
    }
}
