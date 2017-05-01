import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import interfaces from './interfaces';
import news from './news';

export default combineReducers({
    routing: routerReducer,
    interfaces,
    news
});
