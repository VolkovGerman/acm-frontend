import React from 'react';
import { Link } from 'react-router';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import dictionary from './Competitions.words.js';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

import './Competitions.scss';

export default class Competitions extends React.Component {

    componentWillMount() {
        !this.props.competitions.data.length ? this.props.handleLoadingCompetitions() : null;
    }

    render() {
        const breadcrumbs = [
            { name: { ru: 'Чемпионат БГУИР', en: 'BSUIR Competition' }, link: '/competitions' }
        ];

        console.log(this.props); 

        return (
            <div className="Competitions">
                <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props} />
                {!this.props.competitions.isLoading && this.props.competitions.data.length
                    ?
                    <div className="champsList clearfix">
                        {this.props.competitions.data.map((item, index) =>
                            item.status 
                                ?
                                <div className="champItem" key={index}>
                                    <Link className='champItem__link' to={`/competitions/${item.id}`}>
                                        <div className="champItem__header">
                                            <div
                                                className="champItem__name">{item.title[this.props.langs.data]}</div>
                                            <div className="champItem__year">{item.year}</div>
                                        </div>
                                        <div className={`champItem__status champItem__status--${item.isOpen ? 'active' : 'closed'}`}>
                                            {item.isOpen ? dictionary.opened[this.props.langs.data] : dictionary.closed[this.props.langs.data]}
                                        </div>
                                    </Link>
                                </div>
                                : <div key={index}></div>
                        )}
                    </div>
                    :
                    <Loader />
                }
            </div>
        );
    }

}
