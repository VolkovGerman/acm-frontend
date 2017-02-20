import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import Home from './components/HomePage/Home';
import Competitions from './components/CompetitionsPage/Competitions';
import News from './components/NewsPage/News';
import NotFound404 from './components/NotFound404Page/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={Home}/>
            <Route path="/competitions" component={Competitions}/>
            <Route path="/news/:news_id" component={News}/>
        </Route>
        <Route path="*" component={NotFound404}/>
    </div>
)
