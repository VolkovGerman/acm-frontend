import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import HomeContainer from './pages/Home/HomeContainer';
import NewsContainer from './pages/News/NewsContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path='/news/:systemName' component={NewsContainer} />
        </Route>
    </div>
);
