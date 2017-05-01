import React from 'react';
import { Link } from 'react-router';

import NewsCard from '../../../components/NewsCard/NewsCard';

import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import dictionary from './News.words';

import './News.scss';

export default class News extends React.Component {

    render() {
        return (
            <div className="News">
                <div className="newsList">
                    <header className="newsList__header">
                        <Link className="newsList__title" to={'news'}>{dictionary.news[this.props.langs.data]}</Link>
                    </header>
                    {!this.props.news.isLoading
                        ?
                        <div className="newsList__content">
                            <div className="newsList__list">
                                {this.props.news.data.map((news, index) =>
                                    news.status[this.props.langs.data] ?
                                        <NewsCard news={news} key={index} lang={this.props.langs.data}/>
                                        : <div key={index}></div>
                                )}
                            </div>
                            <div className="newsList__actions actions">
                                <a className="actions__moreBtn"
                                   onClick={this.handleClickLoadNews}>{dictionary.all_news[this.props.langs.data]}</a>
                            </div>
                        </div>
                        :
                        <Loader/>
                    }
                </div>
            </div>
        )
    }
}
