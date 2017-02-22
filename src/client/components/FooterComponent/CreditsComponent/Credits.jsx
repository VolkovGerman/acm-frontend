import React, {Component} from 'react';
import {Link} from 'react-router';

require('./Credits.scss');

class Credits extends Component {
    render() {
        return (
            <div className="Credits">
                <div className="credits">
                    БГУИР / ул. Петруся Бровки 4, Минск, РБ / +375 (29) 758-55-11
                </div>
            </div>
        );
    }
}

export default Credits;
