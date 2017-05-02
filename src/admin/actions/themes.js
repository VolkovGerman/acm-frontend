import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';

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
