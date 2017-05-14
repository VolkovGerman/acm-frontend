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
import CompetitionsListContainer from './pages/Champs/CompetitionsList/CompetitionsListContainer';
import CompetitionCreateContainer from './pages/Champs/CompetitionCreate/CompetitionCreateContainer';
import CompetitionSectionsContainer from './pages/Champs/CompetitionSectionsList/CompetitionSectionsContainer';
import CompetitionSectionCreateContainer from './pages/Champs/CompetitionSectionCreate/CompetitionSectionCreateContainer';
import CompetitionPagesContainer from './pages/Champs/CompetitionPagesList/CompetitionPagesContainer';
import CompetitionPageCreateContainer from './pages/Champs/CompetitionPageCreate/CompetitionPageCreateContainer';
import NotFoundContainer from './pages/NotFound/NotFoundContainer';

export const routes = (
    <div>
        <Route path='/dashboard' component={IndexContainer}>
            <IndexRoute component={NewsListContainer}/>
            <Route path='news' component={NewsListContainer}/>
            <Route path='news/create' component={NewsCreateContainer}/>
            <Route path='news/update' component={NewsCreateContainer} />
            <Route path='events' component={EventsListContainer}/>
            <Route path='events/create' component={EventCreateContainer}/>
            <Route path='events/update' component={EventCreateContainer} />
            <Route path='db/tags' component={TagsListContainer}/>
            <Route path='db/tags/create' component={TagCreateContainer}/>
            <Route path='db/tags/update' component={TagCreateContainer} />
            <Route path='db/themes' component={ThemesListContainer}/>
            <Route path='db/themes/create' component={ThemeCreateContainer}/>
            <Route path='db/themes/update' component={ThemeCreateContainer} />
            <Route path='competitions' component={CompetitionsListContainer} />
            <Route path='competitions/create' component={CompetitionCreateContainer} />
            <Route path='competitions/update' component={CompetitionCreateContainer} />
            <Route path='competitions/:competition_id/sections' component={CompetitionSectionsContainer} />
            <Route path='competitions/:competition_id/sections/create' component={CompetitionSectionCreateContainer} />
            <Route path='competitions/:competition_id/sections/update' component={CompetitionSectionCreateContainer} />
            <Route path='competitions/:competition_id/sections/:section_id/pages' component={CompetitionPagesContainer} />
            <Route path='competitions/:competition_id/sections/:section_id/pages/create' component={CompetitionPageCreateContainer} />
            <Route path='competitions/:competition_id/sections/:section_id/pages/update' component={CompetitionPageCreateContainer} />
        </Route>
        <Route path='*' component={NotFoundContainer} />
    </div>
);
