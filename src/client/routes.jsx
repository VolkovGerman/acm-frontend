import React from 'react';
import { Route } from 'react-router';

import IndexContainer from './components/Index/IndexContainer';

export const routes = (
    <div>
        <Route path='/' component={IndexContainer} />
    </div>
);
