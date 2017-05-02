import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import NewsListContainer from './pages/NewsList/NewsListContainer';
import NewsCreateContainer from './pages/NewsCreate/NewsCreateContainer';
import EventsListContainer from './pages/EventsList/EventsListContainer';
import EventCreateContainer from './pages/EventCreate/EventCreateContainer';
import TagsListContainer from './pages/Database/TagsList/TagsListContainer';
import TagCreateContainer from './pages/Database/TagCreate/TagCreateContainer';
import ThemesListContainer from './pages/Database/ThemesList/ThemesListContainer';
import ThemeCreateContainer from './pages/Database/ThemeCreate/ThemeCreateContainer';

export const routes = (
    <div>
        <Route path='/dashboard' component={IndexContainer}>
            <IndexRoute component={NewsListContainer}/>
            <Route path='/news' component={NewsListContainer}/>
            <Route path='/news/create' component={NewsCreateContainer}/>
            <Route path='/news/update' component={NewsCreateContainer} />
            <Route path='/events' component={EventsListContainer}/>
            <Route path='/events/create' component={EventCreateContainer}/>
            <Route path='/events/update' component={EventCreateContainer} />
            <Route path='/db/tags' component={TagsListContainer}/>
            <Route path='/db/tags/create' component={TagCreateContainer}/>
            <Route path='/db/tags/update' component={TagCreateContainer} />
            <Route path='/db/themes' component={ThemesListContainer}/>
            <Route path='/db/themes/create' component={ThemeCreateContainer}/>
            <Route path='/db/themes/update' component={ThemeCreateContainer} />
        </Route>
    </div>
);
