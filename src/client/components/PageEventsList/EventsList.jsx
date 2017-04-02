import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../core/config/general.config';
import dateformat from 'dateformat';
import devideProperties from '../../../core/scripts/devidePropertiesByLanguage';
import Breadcrumbs from '../Widgets/Breadcrumbs/Breadcrumbs';

require('./EventsList.scss');

const month = 10;

class EventsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            breadcrumbs: []
        }
    }

    componentWillMount = () => {
        this.setState({
            breadcrumbs: [
                {
                    link: '/news',
                    name: ['События', 'Events']
                }
            ]
        })
    };

    componentDidMount = () => {
        fetch(`${config.server}/events`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let events = devideProperties(_['_embedded']['events']);
                this.setState({
                    events: events
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        (
            <div className="EventsPage">
                <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
                <div className="eventsPage">
                    <header className="eventsPage__header">
                        <div className="eventsPage__title">{this.props.lang.all_events}</div>
                    </header>
                    <div className="eventsPage__content">
                        {this.state.events.map((item, index) =>
                            item.status[this.props.lang.currentLangIndex] ?
                                <div className="event clearfix" key={index}>
                                    <div className="event__left">
                                        <div className="eventDate">
                                            <div className="eventDate__day">
                                                {dateformat(item.date, "dd")}
                                            </div>
                                            <div className="eventDate__month-year">
                                                <div className="eventDate__month">
                                                    {dateformat(item.date, "mmmm")}
                                                </div>
                                                <div className="eventDate__year">
                                                    {dateformat(item.date, "yyyy")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event__right">
                                        <div className="event__header">
                                            <div className="event__title">
                                                {item.title[this.props.lang.currentLangIndex]}
                                            </div>
                                        </div>
                                        <div className="event__content">
                                            <div className="event__info">
                                                <div className="event__place">
                                                    <div className="event__place-key">Место</div>
                                                    {item.place[this.props.lang.currentLangIndex]}
                                                </div>
                                            </div>
                                            <div className="event__description" dangerouslySetInnerHTML={{__html: item.description[this.props.lang.currentLangIndex]}}></div>
                                        </div>
                                    </div>
                                </div>
                                : <div key={index}></div>
                        )}
                    </div>
                    <div className="eventsPage__actions actions">
                        <Link className="actions__moreBtn" to={`events`}>{this.props.lang.more_events}</Link>
                    </div>
                </div>
            </div>
        )
}

export default connect(
    state => ({
        lang: state.lang
    })
)(EventsPage);
