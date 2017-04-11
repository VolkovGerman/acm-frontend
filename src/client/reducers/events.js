import * as actionTypes from '../actions-types/events';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_EVENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
