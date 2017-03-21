import React, {Component} from 'react';
import {Link} from 'react-router';

import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./ChampItem.scss');

const pageParams = {
    champLogo: require('../../../../static/images/logo/acm_logo.png'),
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/champs',
            name: 'Чемпионат БГУИР'
        },
        {
            link: '/champs/1',
            name: 'Чемпионат БГУИР 2016'
        },
    ]
}

const sectionsList = [
    {
        name: 'Актуальное',
        pages: [
            {link: 'lalala', name: 'Регистрация'},
            {link: 'lalala1', name: 'Зарегистрированные команды'},
        ]
    },
    {
        name: 'Подробнее о чемпионате',
        pages: [
            {link: 'lalala', name: 'Правила чемпионата'},
            {link: 'lalala1', name: 'Организационный комитет'},
            {link: 'lalala2', name: 'Ключевые даты'},
        ]
    },
    {
        name: 'Четвертьфинал',
        pages: [
            {link: 'lalala', name: 'Общая информация'},
            {link: 'lalala1', name: 'Условия задач'},
            {link: 'lalala2', name: 'Участники'},
            {link: 'lalala3', name: 'Результаты'},
        ]
    },
    {
        name: 'Полуфинал',
        pages: [
            {link: 'lalala', name: 'Общая информация'},
            {link: 'lalala1', name: 'Условия задач'},
            {link: 'lalala2', name: 'Участники'},
            {link: 'lalala3', name: 'Результаты'},
            {link: 'lalala3', name: 'Фотографии'},
        ]
    },
    {
        name: 'Финал',
        pages: [
            {link: 'lalala', name: 'Общая информация'},
            {link: 'lalala1', name: 'Условия задач'},
            {link: 'lalala2', name: 'Участники'},
            {link: 'lalala3', name: 'Результаты'},
            {link: 'lalala3', name: 'Видео'},
        ]
    },
];

class ChampsItemPage extends Component {

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            <div className="ChampItem">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                <div className="ChampItem__content">
                    <div className="champHeader clearfix">
                        <div className="champHeader__icon">
                            <img src={pageParams.champLogo} alt="Champ Logo"/>
                        </div>
                        <div className="champHeader__title">
                            <div className="champHeader__name">
                                Чемпионат БГУИР
                            </div>
                            <div className="champHeader__year">
                                2016
                            </div>
                        </div>
                    </div>
                    <div className="champSections">
                        {sectionsList.map((section, sectionIndex) =>
                            <div className="champSections__item"  key={sectionIndex}>
                                <div className="champSections__itemTitle">
                                    {section.name}
                                </div>
                                <div className="champSections__itemList sectionsList clearfix">
                                    {sectionsList[sectionIndex].pages.map((page, pageIndex) =>
                                        <div className="sectionsList__item"  key={pageIndex}>
                                            <Link className="sectionsList__link" to={`/champs/${pageIndex}/${pageIndex}`}>{page.name}</Link>
                                       </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ChampsItemPage;
