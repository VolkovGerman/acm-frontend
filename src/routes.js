import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App/App';
import Main from './components/Main/Main';
import News from './components/News/News';
import NotFound from './components/Errors/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import AdminMain from './components/Admin/Main/Main';
import Login from './components/Admin/Login/Login';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Main}/>
            <Route path="/news/:news_id" component={News}/>
        </Route>
        <Route path='/admin' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={AdminMain}/>
            <Route path="/login" component={Login}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </div>
)