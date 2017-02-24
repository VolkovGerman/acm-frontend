import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import HomePage from './components/HomePage/Home';
import ChampsPage from './components/ChampsPage/Champs';
import ChampsItemPage from './components/ChampItemPage/ChampItem';
import NewsPage from './components/NewsPage/News';
import NotFoundPage from './components/NotFound404Page/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={HomePage} />
            <Route path="/champs" component={ChampsPage} />
            <Route path="/champs/:id" component={ChampsItemPage} />
            <Route path="/news/:news_id" component={NewsPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
)
