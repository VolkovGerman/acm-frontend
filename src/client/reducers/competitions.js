import * as actionTypes from '../actions-types/competitions';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export default function handleLoadingCompetitions(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COMPETITIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_COMPETITIONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_COMPETITIONS_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case actionTypes.FETCH_COMPETITION_SECTIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
}
