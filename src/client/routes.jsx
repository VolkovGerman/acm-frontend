import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Client from './components/Client'
import Main from './components/Main/Main'

export const routes = (
    <div>
        <Route path='/' component={Client}>
            <IndexRoute component={Main}/>
            {/*<Route path="/news/:news_id" component={News}/>*/}
        </Route>
    </div>
)
