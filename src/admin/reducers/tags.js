import * as actionTypes from '../actions-types/tags';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TAGS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_TAGS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_TAGS_FAILURE:
            return {
                ...state,
                data: initialState.data,
                error: action.payload,
            };

        default:
            return state;
    }
}
