import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Admin from './components/Admin';
import Main from './components/HomePage/Home';
import NewsList from './components/News/NewsList';
import NewsCreate from './components/News/NewsCreate';
import EventList from './components/Events/EventList';
import EventCreate from './components/Events/EventCreate';
import TopicList from './components/DataBase/Topic/TopicList';
import TopicCreate from './components/DataBase/Topic/TopicCreate';
import TagList from './components/DataBase/Tag/TagList';
import TagCreate from './components/DataBase/Tag/TagCreate';
import NotFound404 from '../client/components/_pages/NotFound/NotFound404';

export const routes = (
    <div>
        <Route path='/' component={Admin} onEnter={Admin.onEnter}>
            <IndexRoute component={NewsList}/>
            <Route path='/news' component={NewsList} />
            <Route path='/news/create' component={NewsCreate} />
            <Route path='/news/update' component={NewsCreate} />
            <Route path='/events' component={EventList} />
            <Route path='/events/create' component={EventCreate} />
            <Route path='/events/update' component={EventCreate} />
            <Route path='/db/topics' component={TopicList} />
            <Route path='/db/topics/create' component={TopicCreate} />
            <Route path='/db/topics/update' component={TopicCreate} />
            <Route path='/db/tags' component={TagList} />
            <Route path='/db/tags/create' component={TagCreate} />
            <Route path='/db/tags/update' component={TagCreate} />
        </Route>
        <Route path='*' component={NotFound404} />
    </div>
);
