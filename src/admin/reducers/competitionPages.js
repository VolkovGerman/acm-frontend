import * as actionTypes from '../actions-types/competitionPages';

const initialState = {
    tableData: [],
    tableFields: [],
    data: false,
    isLoading: false,
    error: false
};

export default function competitionPages(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COMPETITION_PAGES_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_COMPETITION_PAGES_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.FETCH_CURRENT_COMPETITION_PAGES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_COMPETITION_PAGES_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.SET_COMPETITION_PAGES_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_COMPETITION_PAGES_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.POST_COMPETITION_PAGE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_COMPETITION_PAGE_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_COMPETITION_PAGE_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_COMPETITION_PAGE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_COMPETITION_PAGE_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_COMPETITION_PAGE_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_COMPETITION_PAGE:
            return {
                ...state,
                data: initialState.data,
                error: initialState.error
            };

        default:
            return state;
    }
}
