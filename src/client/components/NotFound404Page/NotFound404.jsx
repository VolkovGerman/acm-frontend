import React, {Component} from 'react';
import {Link} from 'react-router';

require('./NotFound404.scss');

class NotFound404 extends Component {
    render() {
        return (
            <div className="NotFound404">
                Not found <Link to="/">To Home</Link>
            </div>
        );
    }
}

export default NotFound404;
