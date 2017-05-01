import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../../core/config/general.config';
import dateformat from 'dateformat';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';

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
            
        )
}

export default connect(
    state => ({
        lang: state.lang
    })
)(EventsPage);
