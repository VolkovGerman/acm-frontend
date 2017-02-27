import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

require('./Events.scss');

class Events extends Component {
    render() {
        return (
            <div className="Events">
                <div className="events">
                    <div className="events__title">{this.props.lang.events}</div>
                    {this.props.events.map((item, index) =>
                        <div className="event" key={index}>
                            <div className={`event__status event__status_${item.rang}`}>{item.rang}</div>
                            <Link className="event__title" to={`events/${item.id}`}>Чемпионат БГУИР 2017</Link>
                            <div className="event__date">{this.props.lang.when}: 10 Апреля 2017 @ 09:00</div>
                            <div className="event__date">{this.props.lang.where}: Минск, Гикало 9</div>
                        </div>
                    )}
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
