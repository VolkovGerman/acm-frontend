import * as actionTypes from '../actions-types/events';

const initialState = {
    tableData: [],
    tableFields: [],
    data: false,
    isLoading: false,
    error: false
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_EVENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.FETCH_CURRENT_EVENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.SET_EVENTS_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_EVENTS_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.POST_EVENT_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_EVENT_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_EVENT_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_EVENT_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_EVENT_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_EVENT_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_EVENT:
            return {
                ...state,
                data: initialState.data,
                error: initialState.error
            };

        default:
            return state;
    }
}
