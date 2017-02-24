import React, {Component} from 'react';
import {Link} from 'react-router';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./Champs.scss');

const pageParams = {
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/champs',
            name: 'Чемпионат БГУИР'
        },
    ]
}

const champsList = [
    {id: 1, name: 'Чемпионат БГУИР 2017', status: 'opened', statusText: 'Открыт'},
    {id: 2, name: 'Чемпионат БГУИР 2016', status: 'closed', statusText: 'Завершен'},
    {id: 3, name: 'Чемпионат БГУИР 2015', status: 'closed', statusText: 'Завершен'},
    {id: 4, name: 'Чемпионат БГУИР 2014', status: 'closed', statusText: 'Завершен'},
    {id: 5, name: 'Чемпионат БГУИР 2013', status: 'closed', statusText: 'Завершен'},
    {id: 6, name: 'Чемпионат БГУИР 2012', status: 'closed', statusText: 'Завершен'},
    {id: 7, name: 'Чемпионат БГУИР 2011', status: 'closed', statusText: 'Завершен'},
    {id: 8, name: 'Чемпионат БГУИР 2010', status: 'closed', statusText: 'Завершен'},
    {id: 9, name: 'Чемпионат БГУИР 2009', status: 'closed', statusText: 'Завершен'}
];

class ChampsPage extends Component {
    render() {
        return (
            <div className="Champs">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                <ul className="champsList">
                    {champsList.map((item, index) =>
                        <li className="champsList__item" key={index}>
                            <Link className={`champsList__itemLink champsList__itemLink--${item.status} clearfix`} to={`/champs/${item.id}`}>
                                <span className="champsList__itemStatus">{item.statusText}</span>
                                {item.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ChampsPage;
