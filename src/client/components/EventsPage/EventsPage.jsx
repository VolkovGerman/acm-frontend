import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../core/config/general.config';
import dateformat from 'dateformat';
import devideProperties from '../../../core/scripts/devidePropertiesByLanguage';

require('./EventsPage.scss');

const month = 10;

class EventsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

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
                <div className="eventsPage">
                    <header className="eventsPage__header">
                        <div className="eventsPage__title">{this.props.lang.all_events}</div>
                    </header>
                    {this.state.events.map((item, index) =>
                        <div className="eventsPage__content event clearfix" key={index}>
                            <div className="event__left eventInfo">
                                <div className="eventInfo__date">
                                    <div className="eventInfo__day">
                                        {dateformat(item.date, "dd")}
                                    </div>
                                    <div className="eventInfo__month-year">
                                        <span className="eventInfo__month">
                                            {dateformat(item.date, "mmmm")}
                                        </span>
                                        <span className="eventInfo__year">
                                            {dateformat(item.date, "yyyy")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="event__right eventMain">
                                <div className="eventMain__header">
                                    <div className="eventMain__status">
                                        New
                                    </div>
                                    <div className="eventMain__title">
                                        {item.title[this.props.lang.currentLangIndex]}
                                    </div>
                                </div>
                                <div className="eventMain__content">
                                    <div className="eventMain__info">
                                        <div className="eventMain__time">
                                            {dateformat(item.date, "mmmm d, dddd, HH:MM")}
                                        </div>
                                        <div className="eventMain__place">
                                            {item.place[this.props.lang.currentLangIndex]}
                                        </div>
                                    </div>
                                    <div className="eventMain__description">
                                        {item.description[this.props.lang.currentLangIndex]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
}

export default connect(
    state => ({
        lang: state.lang
    })
)(EventsPage);
