import React from 'react';
import { Link } from 'react-router';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import dictionary from './Competition.words.js';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

import './Competition.scss';

const champLogo = require('../../../../static/images/logo/acm_logo.png');

export default class Competitions extends React.Component {

    componentWillMount() {
        !this.props.competitions.data.length ? this.props.handleLoadingCompetitions() : null;

        // this.props.handleLoadingCompetitionThenSections(this.props.routeParams.systemName);
    }

    render() {
        let competition = this.props.competitions.data.filter(_ => _.systemName === this.props.routeParams.systemName)[0];

        const pageName = competition
            ? { ru: `${competition.title.ru} ${competition.year}` , en: `${competition.title.en} ${competition.year}` }
            : { ru: this.props.routeParams.systemName, en: this.props.routeParams.systemName };
        
        const breadcrumbs = [
            { name: { ru: 'Чемпионат БГУИР', en: 'BSUIR Competition' }, link: '/competitions' },
            { name: { ru: pageName.ru, en: pageName.en }, link: `/news/${this.props.routeParams.systemName}` },
        ];

        console.log(this.props); 

        return (
            <div className="Competition">
                <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props} />
                {!this.props.competitions.isLoading && this.props.competitions.data.length
                    ?
                    <div className="Competition__content">
                        <div className="champHeader clearfix">
                            <div className="champHeader__icon">
                                <img src={champLogo} alt="Champ Logo"/>
                            </div>
                            <div className="champHeader__title">
                                <div className="champHeader__name">
                                    {competition.title[this.props.langs.data]}
                                </div>
                                <div className="champHeader__year">
                                    {competition.year}
                                </div>
                            </div>
                        </div>
                        <div className="champSections">
                            {/*{competition.sections.map((section, sectionIndex) =>
                                <div className="champSections__item" key={sectionIndex}>
                                    <div className="champSections__itemTitle">
                                        {section.title[this.props.langs.data]}
                                    </div>
                                    <div className="champSections__itemList sectionsList">
                                        {/*{!this.props.competitions.isLoading
                                            ?
                                            section.pages.map((page, pageIndex) =>
                                                <div className="sectionsList__item" key={pageIndex}>
                                                    <Link className="sectionsList__link"
                                                            to={`/competitions/${sectionIndex}/${pageIndex}`}>{page.title[this.props.langs.data]}</Link>
                                                </div>
                                            )
                                            :
                                            <Loader />
                                        }
                                    </div>
                                </div>
                            )}*/}
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
        );
    }

}
