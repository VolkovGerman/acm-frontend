import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Admin from './components/Admin';
import Main from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import NewsList from './components/News/NewsList';
import NewsCreate from './components/News/NewsCreate';
import Events from './components/Events/EventsPage/Events';
import CreateEvent from './components/Events/CreateEventPage/CreateEvent';
import TopicList from './components/DataBase/Topic/TopicList';
import TopicCreate from './components/DataBase/Topic/TopicCreate';
import TagList from './components/DataBase/Tag/TagList';
import TagCreate from './components/DataBase/Tag/TagCreate';
import NotFound404 from '../client/components/NotFound404Page/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={Main}/>
            <Route path='/news' component={NewsList} />
            <Route path='/news/create' component={NewsCreate} />
            <Route path='/events' component={Events} />
            <Route path='/events/create' component={CreateEvent} />
            <Route path='/db/topics' component={TopicList} />
            <Route path='/db/topics/create' component={TopicCreate} />
            <Route path='/db/tags' component={TagList} />
            <Route path='/db/tags/create' component={TagCreate} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='*' component={NotFound404} />
    </div>
);
