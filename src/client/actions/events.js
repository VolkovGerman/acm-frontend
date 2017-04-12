import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE
} from '../actions-types/events';

function fetchEventsRequest() {
    return {
        type: FETCH_EVENTS_REQUEST
    }
}


function fetchEventsSuccess(payload) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload
    }
}


function fetchEventsFailure(payload) {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload
    }
}

export function handleLoadingEvents(size) {
    return function (dispatch) {
        dispatch(fetchEventsRequest());

        return fetch(`${config.server}/api/events?size=${size}`)
            .then(response => response.json())
            .then(json => dispatch(fetchEventsSuccess(json)))
            .catch(err => dispatch(fetchEventsFailure(err)));
    }
}
