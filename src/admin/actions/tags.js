import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';

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

function fetchCurrentTagSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_TAG_SUCCESS,
        payload
    }
}

function setTagsTableData(payload) {
    return {
        type: actionTypes.SET_TAGS_TABLE_DATA,
        payload
    }
}

function setTagsTableFields(payload) {
    return {
        type: actionTypes.SET_TAGS_TABLE_FIELDS,
        payload
    }
}

function postTagRequest() {
    return {
        type: actionTypes.POST_TAG_REQUEST
    }
}

function postTagSuccess(payload) {
    return {
        type: actionTypes.POST_TAG_SUCCESS,
        payload
    }
}

function postTagFailure(payload) {
    return {
        type: actionTypes.POST_TAG_FAILURE,
        payload
    }
}

function putTagRequest() {
    return {
        type: actionTypes.PUT_TAG_REQUEST
    }
}

function putTagSuccess(payload) {
    return {
        type: actionTypes.PUT_TAG_SUCCESS,
        payload
    }
}

function putTagFailure(payload) {
    return {
        type: actionTypes.PUT_TAG_FAILURE,
        payload
    }
}

function deleteTagsRequest() {
    return {
        type: actionTypes.DELETE_TAGS_REQUEST,
    }
}

function deleteTagsSuccess(payload) {
    return {
        type: actionTypes.DELETE_TAGS_SUCCESS,
        payload
    }
}

function deleteTagsFailure(payload) {
    return {
        type: actionTypes.DELETE_TAGS_FAILURE,
        payload
    }
}

export function flushTag() {
    return {
        type: actionTypes.FLUSH_TAG
    }
}

export function handleLoadingTags() {
    return function (dispatch) {
        dispatch(fetchTagsRequest());

        return fetch(`${config.server}/api/tags`)
            .then(response => response.json())
            .then(json => {
                const tags = json.map(tag => {
                    return {
                        id: tag.id,
                        name: tag.name.ru
                    }
                });
                dispatch(fetchTagsSuccess(tags))
            })
            .catch(err => dispatch(fetchTagsFailure(err)));
    }
}

export function handleLoadingTagsList() {
    return function (dispatch) {
        dispatch(fetchTagsRequest());

        return fetch(`${config.server}/api/tags`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название rus',
                    'Название eng'
                ];
                dispatch(setTagsTableFields(tableFields));
                const tableData = json.map(_ => {
                    return {
                        id: _.id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/db/tags/update?id=${_.id}`
                            }
                        ],
                        cells: [
                            _.name.ru,
                            _.name.en
                        ]
                    }
                });
                dispatch(setTagsTableData(tableData));
                dispatch(fetchTagsSuccess())
            })
            .catch(err => dispatch(fetchTagsFailure(err)));
    }
}

export function handleLoadingCurrentTag(id) {
    return function (dispatch) {
        dispatch(fetchTagsRequest());

        return fetch(`${config.server}/api/tags/${id}`)
            .then(response => response.json())
            .then(json => dispatch(fetchCurrentTagSuccess(json)))
            .catch(err => dispatch(fetchTagsFailure(err)));
    }
}

export function handlePostTag(body) {
    return function (dispatch) {
        dispatch(postTagRequest());

        return fetch(`${config.server}/api/tags`, {
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
                dispatch(postTagSuccess(json));
                browserHistory.push('/db/tags');
            })
            .catch(err => dispatch(postTagFailure(err)));
    }
}

export function handlePutTag(id, body) {
    return function (dispatch) {
        dispatch(putTagRequest());

        return fetch(`${config.server}/api/tags/${id}`, {
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
                dispatch(putTagSuccess(json));
                browserHistory.push('/db/tags');
            })
            .catch(err => dispatch(putTagFailure(err)));
    }
}

export function handleDeleteTags(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteTagsRequest());

            return fetch(`${config.server}/api/tags`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteTagsSuccess(json)))
                .catch(err => dispatch(deleteTagsFailure(err)));
        }
    }
}
