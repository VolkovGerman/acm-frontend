export default function dictionary(state = [], action) {
    if (action.type === 'INIT_DICTIONARY') {
        return action.payload;
    }
    return state;
}
