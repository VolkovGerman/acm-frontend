import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import config from '../../../../core/config/general.config';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';

require('./ChampItem.scss');

const pageParams = {
    champLogo: require('../../../../../static/images/logo/acm_logo.png'),
    breadcrumbs: [
        {
            link: '/champs',
            name: ['Чемпионат БГУИР', 'BSUIR Championship']
        },
        {
            link: '/champs/1',
            name: ['Чемпионат БГУИР 2016', 'BSUIR Championship 2016']
        },
    ]
};

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

    constructor(props) {
        super(props);

        this.state = {
            breadcrumbs: [],
            champSections: []
        }
    }

    loadingChampById = (id) => {
        fetch(`${config.server}/champs/${id}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let champ = devideProperties(_)[0];
                this.setState({
                    champ: champ
                });
                this.initBreadCrumbs({
                    link: `/champs/${id}`,
                    name: champ.title.map(function (item) {
                        return item + ' ' + champ.year;
                    })
                });
                console.log(champ);
                this.loadingChampSections(champ['_links'].sections.href);
            });
    };

    loadingChampSections = (link) => {
        fetch(link, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let champSections = devideProperties(_['_embedded']['champSections']);
                this.setState({
                    champSections: champSections
                });
                this.props.updateLoadedStatus(true, 1);
                // this.loadingSectionPages(champSections[0]['_links'].pages.href);
            });
    };

    loadingSectionPages = (link) => {
        fetch(link, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let sectionPages = devideProperties(_['_embedded']['pages']);
                console.log(sectionPages);

            });
    };

    initBreadCrumbs = (breadcrumb) => {
        this.setState({
            breadcrumbs: [
                {
                    link: '/champs',
                    name: ['Чемпионат БГУИР', 'BSUIR Championship']
                },
                {
                    link: breadcrumb.link,
                    name: breadcrumb.name
                }
            ]
        })
    };

    componentDidMount = () => {
        this.loadingChampById(this.props.params.id);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        return (
            this.state.champ ?
                <div className="ChampItem">
                    <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
                    <div className="ChampItem__content">
                        <div className="champHeader clearfix">
                            <div className="champHeader__icon">
                                <img src={pageParams.champLogo} alt="Champ Logo"/>
                            </div>
                            <div className="champHeader__title">
                                <div className="champHeader__name">
                                    {this.state.champ.title[this.props.lang.currentLangIndex]}
                                </div>
                                <div className="champHeader__year">
                                    {this.state.champ.year}
                                </div>
                            </div>
                        </div>
                        <div className="champSections">
                            {this.state.champSections.map((section, sectionIndex) =>
                                <div className="champSections__item" key={sectionIndex}>
                                    <div className="champSections__itemTitle">
                                        {section.title[this.props.lang.currentLangIndex]}
                                    </div>
                                    <div className="champSections__itemList sectionsList">
                                        {sectionsList[sectionIndex].pages.map((page, pageIndex) =>
                                            <div className="sectionsList__item" key={pageIndex}>
                                                <Link className="sectionsList__link"
                                                      to={`/champs/${pageIndex}/${pageIndex}`}>{page.name}</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                : <div></div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(ChampsItemPage);
