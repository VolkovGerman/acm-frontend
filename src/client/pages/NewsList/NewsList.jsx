import React from 'react';
import { Link } from 'react-router';

import dictionary from './NewsList.words.js';
import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

import NewsCard from '../../components/NewsCard/NewsCard';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import './NewsList.scss';

export default class NewsList extends React.Component {

    componentWillMount() {
        !this.props.news.data.length ? this.props.handleLoadingNews() : null;
    }

    render() {
        const breadcrumbs = [
            { name: { ru: 'Новости', en: 'News' }, link: '/news' }
        ];

        return (
            <div className="NewsList">
                <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props} />
                {!this.props.news.isLoading && this.props.news
                    ?
                    <div className="newsList">
                        <header className="newsList__header">
                            <Link className="newsList__title" to={'news'}>{dictionary.all_news[this.props.langs.data]}</Link>
                        </header>
                        <div className="newsList__content">
                            <div className="newsList__list">
                                {this.props.news.data.map((news, index) =>
                                    news.status[this.props.langs.data] ?
                                        <NewsCard news={news} key={index} lang={this.props.langs.data}/>
                                        : <div key={index}></div>
                                )}
                            </div>
                            {/*<div className="newsList__actions actions">*/}
                                {/*<a className="actions__moreBtn" onClick={this.handleClickLoadNews}>{dictionary.more_news[this.props.langs.data]}</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
            
        )
    }

}