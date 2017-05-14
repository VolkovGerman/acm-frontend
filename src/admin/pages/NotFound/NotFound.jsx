import React, {Component} from 'react';
import {Link} from 'react-router';

require('./NotFound.scss');

export default class NotFound extends Component {
    render() {
        return (
            <div className="NotFound">
                Not found <Link to="/dashboard">To Home</Link>
            </div>
        );
    }
}
