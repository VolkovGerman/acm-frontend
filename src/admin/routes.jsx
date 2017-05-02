import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import NewsListContainer from './pages/NewsList/NewsListContainer';
import NewsCreateContainer from './pages/NewsCreate/NewsCreateContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer}>
            <IndexRoute component={NewsListContainer}/>
            <Route path='/news' component={NewsListContainer}/>
            <Route path='/news/create' component={NewsCreateContainer}/>
            <Route path='/news/update' component={NewsCreateContainer} />
        </Route>
    </div>
);
