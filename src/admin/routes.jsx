import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import NewsListContainer from './pages/NewsList/NewsListContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer}>
            <IndexRoute component={NewsListContainer}/>
        </Route>
    </div>
);
