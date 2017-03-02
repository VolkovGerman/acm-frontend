import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import HomePage from './components/HomePage/Home';
import ChampsPage from './components/ChampsPage/Champs';
import ChampsItemPage from './components/ChampItemPage/ChampItem';
import ChampsCustomPage from './components/ChampCustomPage/ChampCustom';
import NewsPage from './components/NewsPage/News';
import NotFoundPage from './components/NotFound404Page/NotFound404';
import ChampRegistration from './components/ChampRegistrationPage/ChampRegistration';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={HomePage} />
            <Route path="/champs" component={ChampsPage} />
            <Route path="/champs/:id" component={ChampsItemPage} />
            <Route path="/champs/:id/registration" component={ChampRegistration} />
            <Route path="/champs/:id/:pageName" component={ChampsCustomPage} />
            <Route path="/news/:news_id" component={NewsPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </div>
)
