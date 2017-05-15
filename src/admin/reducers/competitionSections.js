import * as actionTypes from '../actions-types/competitionSections';

const initialState = {
    tableData: [],
    tableFields: [],
    data: false,
    isLoading: false,
    error: false
};

export default function competitionSections(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COMPETITION_SECTIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.FETCH_COMPETITION_SECTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case actionTypes.FETCH_CURRENT_COMPETITION_SECTIONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case actionTypes.FETCH_COMPETITION_SECTIONS_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.SET_COMPETITION_SECTIONS_TABLE_DATA:
            return {
                ...state,
                tableData: action.payload
            };

        case actionTypes.SET_COMPETITION_SECTIONS_TABLE_FIELDS:
            return {
                ...state,
                tableFields: action.payload
            };

        case actionTypes.POST_COMPETITION_SECTION_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.POST_COMPETITION_SECTION_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.POST_COMPETITION_SECTION_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.PUT_COMPETITION_SECTION_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.PUT_COMPETITION_SECTION_SUCCESS:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                isLoading: false
            };

        case actionTypes.PUT_COMPETITION_SECTION_FAILURE:
            return {
                ...state,
                tableData: initialState.tableData,
                tableFields: initialState.tableFields,
                error: action.payload,
            };

        case actionTypes.FLUSH_COMPETITION_SECTION:
            return {
                ...state,
                data: initialState.data,
                error: initialState.error
            };

        default:
            return state;
    }
}
