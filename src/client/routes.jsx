import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Client from './components/Client'
import Home from './components/HomePage/Home'

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={Home}/>
            {/*<Route path="/news/:news_id" component={News}/>*/}
        </Route>
    </div>
)
