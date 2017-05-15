import React from 'react';
import { Link } from 'react-router';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import './CompetitionPage.scss';
import dictionary from './CompetitionPage.words.js';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

export default class CompetitionPage extends React.Component {

    componentWillMount() {
        !this.props.competitions.data.length ? this.props.handleLoadingCompetitionThenSections(this.props.routeParams.compSystemName) : null;
   
        setInterval(() => {
            console.log(this.props);
        }, 2000);
    }

    render() {
        // REFACTOR ALL OF THIS!

        let competition = '';
        let compName = '';
        let page = '';
        let pageName = '';
        let breadcrumbs = '';

        if (this.props.competitions.data.length) {

            competition = this.props.competitions.data
                .filter(_ => _.systemName === this.props.routeParams.compSystemName)[0];

            compName = competition
                ? { ru: competition.title.ru, en: competition.title.en }
                : { ru: `${competition.title.ru} ${competition.year}`, en: `${competition.title.en} ${competition.year}` };

            if (competition.sections) {

                for (let i = 0; i < competition.sections.length; i++) {
                    let pageSearch = competition.sections[i].pages.filter(_ => _.systemName === this.props.routeParams.pageSystemName)[0];
                    if (pageSearch) { page = pageSearch; break; }
                }

                pageName = page
                    ? { ru: page.title.ru, en: page.title.en }
                    : { ru: this.props.routeParams.pageSystemName, en: this.props.routeParams.pageSystemName };

                breadcrumbs = [
                    { name: { ru: 'Чемпионат БГУИР', en: 'BSUIR Competition' }, link: '/competitions' },
                    { name: { ru: compName.ru, en: compName.en }, link: `/competitions/${this.props.routeParams.compSystemName}` },
                    { name: { ru: pageName.ru, en: pageName.en }, link: `/competitions/${this.props.routeParams.compSystemName}/${this.props.routeParams.pageSystemName}` },
                ];

            }

        }

        return (
            <div className="CompetitionPage">
                {!this.props.competitions.isLoading && pageName
                    ?
                    <div className="CompetitionPage__content">
                        <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props}/>
                        <div className="customPage">
                            <div className="customPage__header">
                                <div className="customPage__title">{page.title[this.props.langs.data]}</div>
                                <div className="historyBack">
                                    <Link className="historyBack__btn" to={`/competitions/${this.props.routeParams.compSystemName}`}>{dictionary.back[this.props.langs.data]}</Link>
                                </div>
                            </div>
                            <div className="customPage__content" dangerouslySetInnerHTML={{__html: page.content[this.props.langs.data]}}>
                            </div>
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
        );
    }

}
