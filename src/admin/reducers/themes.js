import * as actionTypes from '../actions-types/themes';

const initialState = {
    tableData: [],
    tableFields: [],
    data: [],
    current: {},
    isLoading: false,
    error: false
};

export default function tags(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_THEMES_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_THEMES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_THEMES_FAILURE:
            return {
                ...state,
                data: initialState.data,
                error: action.payload,
            };

        case actionTypes.FETCH_CURRENT_THEME_SUCCESS:
            return {
                ...state,
                current: action.payload,
                isLoading: false
            };

        case actionTypes.SET_THEMES_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_THEMES_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.FETCH_THEMES_TABLE_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.POST_THEME_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_THEME_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_THEME_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_THEME_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_THEME_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_THEME_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_THEME:
            return {
                ...state,
                current: initialState.current,
                error: initialState.error
            };

        default:
            return state;
    }
}
