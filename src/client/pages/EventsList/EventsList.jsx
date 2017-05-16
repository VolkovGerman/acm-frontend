import React from 'react';
import { Link } from 'react-router';

import Time from 'react-time-format'
import dictionary from './EventsList.words.js';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import './EventsList.scss';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const EVENTS_SIZE = 3;

export default class EventsList extends React.Component {

    componentDidMount() {
        !this.props.events.data.length ? this.props.handleLoadingEvents(EVENTS_SIZE) : null;
    }

    render() {
        const breadcrumbs = [
            { name: { ru: 'События', en: 'Events' }, link: '/events' }
        ];

        console.log(this.props);

        return (
            <div className="EventsList">
                <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props} />
                {!this.props.events.isLoading && this.props.events.data.length
                    ?
                    <div className="eventsList">
                        <header className="eventsList__header">
                            <div className="eventsList__title">{dictionary.all_events[this.props.langs.data]}</div>
                        </header>
                        <div className="eventsList__content">
                            {this.props.events.data.map((event, index) =>
                                event.status[this.props.langs.data] ?
                                    <div className="event clearfix" key={index}>
                                        <div className="event__left">
                                            <div className="eventDate">
                                                <div className="eventDate__day">
                                                    <Time value={event.date} format="DD"/>
                                                </div>
                                                <div className="eventDate__month-year">
                                                    <div className="eventDate__month">
                                                        <Time value={event.date} format="MM"/>
                                                    </div>
                                                    <div className="eventDate__year">
                                                        <Time value={event.date} format="YYYY"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event__right">
                                            <div className="event__header">
                                                <div className="event__title">
                                                    {event.title[this.props.langs.data]}
                                                </div>
                                            </div>
                                            <div className="event__content">
                                                <div className="event__info">
                                                    <div className="event__place">
                                                        <div className="event__place-key">{dictionary.place[this.props.langs.data]}</div>
                                                        {event.place[this.props.langs.data]}
                                                    </div>
                                                </div>
                                                <div className="event__description"
                                                    dangerouslySetInnerHTML={{__html: event.description[this.props.langs.data]}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    : <div key={index}></div>
                            )}
                        </div>
                        <div className="eventsList__actions actions">
                            <Link className="actions__moreBtn" to={`events`}>{dictionary.more_events[this.props.langs.data]}</Link>
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
        );
    }

}
