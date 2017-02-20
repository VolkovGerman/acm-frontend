import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Client from './components/Client';
import Home from './components/HomePage/Home';
import Competitions from './components/CompetitionsPage/Competitions';

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={Home} />
            <Route path="/competitions" component={Competitions}/>
        </Route>
    </div>
)
