import * as actionTypes from '../actions-types/langs';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_LANGS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_LANGS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_LANGS_FAILURE:
            return {
                ...state,
                data: initialState.data,
                error: action.payload,
            };

        default:
            return state;
    }
}
