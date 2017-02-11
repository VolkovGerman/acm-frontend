import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App/App';
import Main from './components/Main/Main';
import News from './components/News/News';
import NotFound from './components/Errors/NotFound/NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Main}/>
            <Route path="news/:news_id" component={News}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </div>
)