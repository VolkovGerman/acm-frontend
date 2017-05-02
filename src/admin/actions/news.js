import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

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
                                link: `/news/update?id=${news.id}`
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

export function handlePostNews(id, body) {
    return function (dispatch) {
        dispatch(postNewsRequest());

        return fetch(`${config.server}/api/news/add`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then(response => response.json())
            .then(json => dispatch(postNewsSuccess(json)))
            .catch(err => dispatch(postNewsFailure(err)));
    }
}
