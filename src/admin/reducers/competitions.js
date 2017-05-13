import * as actionTypes from '../actions-types/competitions';

const initialState = {
    tableData: [],
    tableFields: [],
    data: false,
    isLoading: false,
    error: false
};

export default function competitions(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COMPETITIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_COMPETITIONS_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.FETCH_CURRENT_COMPETITIONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_COMPETITIONS_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.SET_COMPETITIONS_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_COMPETITIONS_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.POST_COMPETITION_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_COMPETITION_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_COMPETITION_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_COMPETITION_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_COMPETITION_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_COMPETITION_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_COMPETITION:
            return {
                ...state,
                data: initialState.data,
                error: initialState.error
            };

        default:
            return state;
    }
}
