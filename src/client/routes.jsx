import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import HomeContainer from './pages/Home/HomeContainer';
import NewsContainer from './pages/News/NewsContainer';
import NewsListContainer from './pages/NewsList/NewsListContainer';
import EventsListContainer from './pages/EventsList/EventsListContainer';
import СompetitionsContainer from './pages/Competitions/CompetitionsContainer';
import СompetitionContainer from './pages/Competition/CompetitionContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path='/news/:systemName' component={NewsContainer} />
            <Route path='/news' component={NewsListContainer} />
            <Route path='/events' component={EventsListContainer} />
            <Route path='/competitions' component={СompetitionsContainer} />
            <Route path='/competitions/:systemName' component={СompetitionContainer} />
        </Route>
    </div>
);
