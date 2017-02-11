import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menu from './menu';
import news from './news';

export default combineReducers({
    routing: routerReducer,
    menu,
    news
});
