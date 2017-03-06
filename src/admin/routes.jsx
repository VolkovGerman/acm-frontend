import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Admin from './components/Admin';
import Main from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import News from './components/News/NewsPage/News';
import NewsCreate from './components/News/NewsCreatePage/NewsCreate';
import Champs from './components/Champs/ChampsPage/Champs';
import CreateChamp from './components/Champs/CreateChampPage/CreateChamp';
import NotFound404 from '../client/components/NotFound404Page/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={Main}/>
            <Route path='/news' component={News} />
            <Route path='/news/create' component={NewsCreate} />
            <Route path='/champs' component={Champs} />
            <Route path='/champs/create' component={CreateChamp} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound404} />
    </div>
);
