import React, {Component} from 'react';
import {Link} from 'react-router';

require('./MenuSubItem.scss');

class MenuSubItem extends Component {
    render() {
        return (
            <div className="MenuSubItem">
                <ul className="menuSubItem">
                    <li className="menuSubItem__item">
                        <Link className="menuSubItem__link"
                              to={this.props.subMenu.link}>{this.props.subMenu.title}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuSubItem;
