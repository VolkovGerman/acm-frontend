import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Admin from './components/Admin'
import Main from './components/HomePage/Home'
import Login from './components/LoginPage/Login'

export const routes = (
    <div>
        <Route path='/' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={Main}/>
        </Route>
        <Route path='/login' component={Login} />
        {/*<Route path='*' component={Login} />*/}
    </div>
)
