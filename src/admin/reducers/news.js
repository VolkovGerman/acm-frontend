import * as actionTypes from '../actions-types/news';

const initialState = {
    tableData: [],
    tableFields: [],
    isLoading: false,
    error: false
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.FETCH_NEWS_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.SET_NEWS_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_NEWS_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        default:
            return state;
    }
}
