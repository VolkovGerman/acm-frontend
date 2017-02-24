export default function menu(state = [], action) {
    if (action.type === 'INIT_MENU') {
        return action.payload;
    }
    return state;
}
