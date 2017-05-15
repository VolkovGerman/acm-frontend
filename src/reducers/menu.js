export default function menu(state = [], action) {
    if (action.type === 'ADD_MENU_ITEM') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'INIT_MENU') {
        return action.payload;
    }
    return state;
}
