import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../../core/config/general.config';
import dateformat from 'dateformat';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';

require('./Events.scss');

class Events extends Component {

    constructor(props) {
        super(props);

        this.eventsCount = 3;
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
                let events = devideProperties(_['_embedded']['events'].slice(0, 3));
                this.setState({
                    events: events
                });
            });
    };

    render() {
        return (
            <div className="Events">
                <div className="events">
                    <header className="events__header">
                        <Link className="events__title" to={'events'}>{this.props.lang.events}</Link>
                    </header>
                    <div className="events__content">
                        <div className="events__list">
                            {this.state.events.map((item, index) =>
                                item.status[this.props.lang.currentLangIndex] ?
                                    <div className="event" key={index}>
                                        <div className={`event__status event__status_${item.rang}`}>{item.rang}</div>
                                        <div className="event__title">{item.title[this.props.lang.currentLangIndex]}</div>
                                        <div className="event__date">{this.props.lang.when}: {dateformat(item.date, "mmmm d, HH:MM")}</div>
                                        <div className="event__date">{this.props.lang.where}: {item.place[this.props.lang.currentLangIndex]}</div>
                                    </div>
                                    : <div key={index}></div>
                            )}
                        </div>
                        <div className="events__actions actions">
                            <Link className="actions__moreBtn"  to={`events`}>{this.props.lang.more_events}</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Events);
