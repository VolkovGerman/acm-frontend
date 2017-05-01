import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import news from './news';
import events from './events';
import langs from './langs';
import competitions from './competitions';

export default combineReducers({
    routing: routerReducer,
    news,
    events,
    langs,
    competitions
});
