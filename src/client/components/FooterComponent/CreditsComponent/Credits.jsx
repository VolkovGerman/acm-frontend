import React, {Component} from 'react';
import {Link} from 'react-router';

require('./Credits.scss');

class Credits extends Component {
    render() {
        return (
            <div className="Credits">
                <div className="credits">
                    <span>Международная студенческая олимпиада по программированию &#169; </span>
                    <Link className="credits__link" to="/">БГУИР 2017</Link>
                </div>
            </div>
        );
    }
}

export default Credits;
