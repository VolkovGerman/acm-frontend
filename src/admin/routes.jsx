import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Admin from './components/Admin';
import NewsList from './components/News/NewsList';
import NewsCreate from './components/News/NewsCreate';
import EventList from './components/Events/EventList';
import EventCreate from './components/Events/EventCreate';
import TopicList from './components/DataBase/Topic/TopicList';
import TopicCreate from './components/DataBase/Topic/TopicCreate';
import TagList from './components/DataBase/Tag/TagList';
import TagCreate from './components/DataBase/Tag/TagCreate';
import ChampCreate from './components/Champs/ChampCreate';
import ChampList from './components/Champs/ChampList';
import SectionCreate from './components/Champs/Sections/SectionCreate';
import SectionList from './components/Champs/Sections/SectionList';
import PageCreate from './components/Champs/Sections/Pages/PageCreate';
import PagesList from './components/Champs/Sections/Pages/PagesList';
import NotFound404 from './components/NotFound/NotFound404';

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
            <Route path='/champs' component={ChampList} />
            <Route path='/champs/create' component={ChampCreate} />
            <Route path='/champs/update' component={ChampCreate} />
            <Route path='/champs/:champId/sections' component={SectionList} />
            <Route path='/champs/:champId/sections/create' component={SectionCreate} />
            <Route path='/champs/:champId/sections/update' component={SectionCreate} />
            <Route path='/champs/:champId/sections/:sectionId/pages' component={PagesList} />
            <Route path='/champs/:champId/sections/:sectionId/pages/create' component={PageCreate} />
            <Route path='/champs/:champId/sections/:sectionId/pages/update' component={PageCreate} />
        </Route>
        <Route path='*' component={NotFound404} />
    </div>
);
