import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import Home from './components/_pages/Home/Home';
import Champs from './components/_pages/Champs/Champs';
import ChampsItem from './components/_pages/ChampItem/ChampItem';
import ChampsCustom from './components/_pages/ChampCustom/ChampCustom';
import News from './components/_pages/News/News';
import NotFound from './components/_pages/NotFound/NotFound404';
import Events from './components/_pages/Events/EventsList';
import AllNews from './components/_pages/NewsFeed/NewsFeed';
import Login from './components/_pages/Login/Login';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={Home} />
            <Route path="/champs" component={Champs} />
            <Route path="/champs/:id" component={ChampsItem} />
            <Route path="/champs/:id/:pageName" component={ChampsCustom} />
            <Route path="/news/:systemName" component={News} />
            <Route path="/news" component={AllNews} />
            <Route path="/events" component={Events} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path="*" component={NotFound} />
    </div>
)
