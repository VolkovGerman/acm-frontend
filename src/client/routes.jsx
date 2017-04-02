import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import HomePage from './components/_pages/Home/Home';
import ChampsPage from './components/_pages/Champs/Champs';
import ChampsItemPage from './components/_pages/ChampItem/ChampItem';
import ChampsCustomPage from './components/_pages/ChampCustom/ChampCustom';
import NewsPage from './components/_pages/News/News';
import NotFoundPage from './components/_pages/NotFound/NotFound404';
import EventsPage from './components/_pages/Events/EventsList';
import AllNews from './components/_pages/NewsFeed/NewsFeed';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={HomePage} />
            <Route path="/champs" component={ChampsPage} />
            <Route path="/champs/:id" component={ChampsItemPage} />
            <Route path="/champs/:id/:pageName" component={ChampsCustomPage} />
            <Route path="/news/:systemName" component={NewsPage} />
            <Route path="/news" component={AllNews} />
            <Route path="/events" component={EventsPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
)
