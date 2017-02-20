import React, {Component} from 'react';
import {Link} from 'react-router';

require('./Breadcrumbs.scss');

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="Breadcrumbs">
                <ul className="breadcrumbs clearfix">
                    {this.props.breadcrumbs.map((item, index) =>
                        <li className="breadcrumbs__item" key={index}>
                            <Link className="breadcrumbs__link" to={item.link}>{item.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;