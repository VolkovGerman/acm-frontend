import React, {Component} from 'react';
import {Link} from 'react-router';

require('./NavigationItem.scss');

class NavigationItem extends Component {
    render() {
        return (
            <div className="NavigationItem">
                <div className="navigationItem">
                    <div className="navigationItem__title">{this.props.navigation.title}</div>
                    <ul className="navigationItem__items">
                        {this.props.navigation.items.map((item, index) =>
                            <li className="navigationItem__item" key={index}>
                                <Link className="navigationItem__link" to={item.link}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationItem;
