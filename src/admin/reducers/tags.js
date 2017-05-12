import * as actionTypes from '../actions-types/tags';

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

        case actionTypes.FETCH_CURRENT_TAG_SUCCESS:
            return {
                ...state,
                current: action.payload,
                isLoading: false
            };

        case actionTypes.SET_TAGS_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_TAGS_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.FETCH_TAGS_TABLE_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.POST_TAG_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_TAG_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_TAG_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_TAG_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_TAG_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_TAG_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_TAG:
            return {
                ...state,
                current: initialState.current,
                error: initialState.error
            };

        default:
            return state;
    }
}
