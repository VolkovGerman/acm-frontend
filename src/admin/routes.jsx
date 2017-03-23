import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Admin from './components/Admin';
import Main from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import News from './components/News/NewsPage/News';
import NewsCreate from './components/News/NewsCreatePage/NewsCreate';
import Events from './components/Events/EventsPage/Events';
import CreateEvent from './components/Events/CreateEventPage/CreateEvent';
import TopicList from './components/DataBase/Topic/TopicList';
import TagList from './components/DataBase/Tag/TagList';
import NotFound404 from '../client/components/NotFound404Page/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={Main}/>
            <Route path='/news' component={News} />
            <Route path='/news/create' component={NewsCreate} />
            <Route path='/events' component={Events} />
            <Route path='/events/create' component={CreateEvent} />
            <Route path='/topics' component={TopicList} />
            <Route path='/tags' component={TagList} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound404} />
    </div>
);
