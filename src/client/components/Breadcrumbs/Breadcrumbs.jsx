import React from 'react';
import {Link} from 'react-router';

import dictionary from './Breadcrumbs.words';

import './Breadcrumbs.scss';

export default (props) => 
    <div className="Breadcrumbs">
        <div className="breadcrumbsWrap">
            <ul className="breadcrumbs clearfix">
                <li className="breadcrumbs__item">
                    <Link className="breadcrumbs__link" to='/'>
                        {dictionary.home[props.langs.data]}
                    </Link>
                </li>
                {props.breadcrumbs.map((item, index) =>
                    <li className="breadcrumbs__item" key={index}>
                        <Link className="breadcrumbs__link" to={item.link}>{item.name[props.langs.data]}</Link>
                    </li>
                )}
            </ul>
        </div>
    </div>
