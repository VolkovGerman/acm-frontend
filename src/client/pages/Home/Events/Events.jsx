import React from 'react';
import {Link} from 'react-router';
import dateformat from 'dateformat';

import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import dictionary from './Events.words';

import './Events.scss';

export default (props) =>
    <div className="Events">

        <div className="events">
            <header className="events__header">
                <Link className="events__title" to={'events'}>{dictionary.events[props.langs.data]}</Link>
            </header>
            {!props.events.isLoading
                ?
                <div className="events__content">
                    <div className="events__list">
                        {props.events.data.map((event, index) =>
                            <div className="event" key={index}>
                                <div
                                    className={`event__status event__status_${event.status[props.langs.data] ? 'new' : 'old'}`}>
                                    {event.status[props.langs.data] ? 'new' : 'old' }
                                </div>
                                <div
                                    className="event__title">{event.title[props.langs.data]}</div>
                                <div
                                    className="event__date">
                                    {dictionary.when[props.langs.data]}: {dateformat(event.date[props.langs.data], "mmmm d, HH:MM")}
                                </div>
                                <div
                                    className="event__date">
                                    {dictionary.where[props.langs.data]}: {event.place[props.langs.data]}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="events__actions actions">
                        <Link className="actions__moreBtn"
                              to={`events`}>{dictionary.more_events[props.langs.data]}</Link>
                    </div>
                </div>
                :
                <Loader/>
            }
        </div>
    </div>
