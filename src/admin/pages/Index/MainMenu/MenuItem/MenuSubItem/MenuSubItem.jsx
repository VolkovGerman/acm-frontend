import React from 'react';
import {Link} from 'react-router';

require('./MenuSubItem.scss');

export default (props) =>
    <div className="MenuSubItem">
        <ul className="menuSubItem">
            <li className="menuSubItem__item">
                <Link className="menuSubItem__link"
                      to={props.subMenu.link}>{props.subMenu.title}</Link>
            </li>
        </ul>
    </div>
