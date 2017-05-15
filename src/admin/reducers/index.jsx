import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import interfaces from './interfaces';
import news from './news';
import events from './events';
import themes from './themes';
import tags from './tags';
import competitions from './competitions';
import competitionSections from './competitionSections';
import competitionPages from './competitionPages';

export default combineReducers({
    routing: routerReducer,
    interfaces,
    news,
    events,
    themes,
    tags,
    competitions,
    competitionSections,
    competitionPages
});
