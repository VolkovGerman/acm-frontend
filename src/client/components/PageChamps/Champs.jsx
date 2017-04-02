import React, {Component} from 'react';
import {Link} from 'react-router';

import Breadcrumbs from '../Widgets/Breadcrumbs/Breadcrumbs';

require('./Champs.scss');

const pageParams = {
    champLogo: require('../../../../static/images/backgrounds/bsuir_acm.jpg'),
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
};

const champsList = [
    {id: 1, name: 'Чемпионат БГУИР', year: '2017', status: 'active', statusText: 'Открыт'},
    {id: 2, name: 'Чемпионат БГУИР', year: '2016', status: 'closed', statusText: 'Завершен'},
    {id: 3, name: 'Чемпионат БГУИР', year: '2015', status: 'closed', statusText: 'Завершен'},
    {id: 4, name: 'Чемпионат БГУИР', year: '2014', status: 'closed', statusText: 'Завершен'},
    {id: 5, name: 'Чемпионат БГУИР', year: '2013', status: 'closed', statusText: 'Завершен'},
    {id: 6, name: 'Чемпионат БГУИР', year: '2012', status: 'closed', statusText: 'Завершен'},
    {id: 7, name: 'Чемпионат БГУИР', year: '2011', status: 'closed', statusText: 'Завершен'},
    {id: 8, name: 'Чемпионат БГУИР', year: '2010', status: 'closed', statusText: 'Завершен'},
    {id: 9, name: 'Чемпионат БГУИР', year: '2009', status: 'closed', statusText: 'Завершен'}
];

class ChampsPage extends Component {

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            <div className="Champs">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                {/*<div className="champLogo">*/}
                    {/*<img src={pageParams.champLogo} alt="ACM Logo"/>*/}
                {/*</div>*/}
                <div className="champsList clearfix">
                    {champsList.map((item, index) =>
                        <div className="champItem" key={index}>
                            <Link className='champItem__link' to={`/champs/${item.id}`}>
                                <div className="champItem__header">
                                    <div className="champItem__name">{item.name}</div>
                                    <div className="champItem__year">{item.year}</div>
                                </div>
                                <div className={`champItem__status champItem__status--${item.status}`}>
                                    {item.statusText}
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ChampsPage;
