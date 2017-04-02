import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import HomePage from './components/PageHome/Home';
import ChampsPage from './components/PageChamps/Champs';
import ChampsItemPage from './components/PageChampItem/ChampItem';
import ChampsCustomPage from './components/PageChampCustom/ChampCustom';
import NewsPage from './components/PageNews/News';
import NotFoundPage from './components/PageNotFound/NotFound404';
import ChampRegistration from './components/PageChampRegistration/ChampRegistration';
import ChampTeamsPage from './components/PageChampTeams/ChampTeams';
import EventsPage from './components/PageEventsList/EventsList';
import AllNews from './components/PageNewsFeed/NewsFeed';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={HomePage} />
            <Route path="/champs" component={ChampsPage} />
            <Route path="/champs/:id" component={ChampsItemPage} />
            <Route path="/champs/:id/registration" component={ChampRegistration} />
            <Route path="/champs/:id/teams" component={ChampTeamsPage} />
            <Route path="/champs/:id/:pageName" component={ChampsCustomPage} />
            <Route path="/news/:systemName" component={NewsPage} />
            <Route path="/news" component={AllNews} />
            <Route path="/events" component={EventsPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
)
