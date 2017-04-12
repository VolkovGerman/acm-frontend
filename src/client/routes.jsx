import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import HomeContainer from './pages/Home/HomeContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer}>
            <IndexRoute component={HomeContainer}/>
        </Route>
    </div>
);
