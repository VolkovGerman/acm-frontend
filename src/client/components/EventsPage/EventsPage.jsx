import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./EventsPage.scss');

const month = 10;

class EventsPage extends Component {

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
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
                    <div className="eventsPage__content event clearfix">
                        <div className="event__left eventInfo">
                            <div className="eventInfo__date">
                                <div className="eventInfo__day">
                                    28
                                </div>
                                <div className="eventInfo__month-year">
                                    <span className="eventInfo__month">
                                        {this.props.lang.months[month]}
                                    </span>
                                    <span className="eventInfo__year">
                                        2017
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
                                    Education Autumn Tour 2016
                                </div>
                            </div>
                            <div className="eventMain__content">
                                <div className="eventMain__info">
                                    <div className="eventMain__time">
                                        10 {this.props.lang.months[month]} 2017 @ 09:00
                                    </div>
                                    <div className="eventMain__place">
                                        Минск, Гикало 9
                                    </div>
                                </div>
                                <div className="eventMain__description">
                                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat
                                </div>
                            </div>
                        </div>
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
