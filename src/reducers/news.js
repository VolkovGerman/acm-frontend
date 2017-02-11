export default function news(state = [], action) {
    if (action.type === 'INIT_NEWS') {
        return action.payload;
    }
    return state;
}