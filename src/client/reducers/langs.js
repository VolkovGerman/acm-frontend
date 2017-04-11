import * as actionTypes from '../actions-types/langs';

const initialState = {
    data: 'ru'
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_LANG:
            return {
                data: action.payload
            };

        default:
            return state;
    }
}
