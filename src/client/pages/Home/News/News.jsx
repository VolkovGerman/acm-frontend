import React from 'react';
import {Link} from 'react-router';
import dateformat from 'dateformat';

import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import dictionary from './News.words';

import './News.scss';

const img = require('../../../../../static/images/backgrounds/bg_slider_2.jpg');

export default class News extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: -1,
            pageSize: 5,
            isAllNews: false
        };

        this.handleClickLoadNews = this.handleClickLoadNews.bind(this);
    }

    handleClickLoadNews = (e) => {

        e.preventDefault();
    };

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
                                        <div className="news clearfix" key={index}>
                                            <div className="news__left">
                                                <Link to={`news/${news.systemName[this.props.langs.data]}`}
                                                      className="news__image-link">
                                                    <img className="news__image" src={img}/>
                                                </Link>
                                            </div>
                                            <div className="news__right">
                                                <header className="news__header">
                                                    <Link className="news__header-title"
                                                          to={`news/${news.systemName[this.props.langs.data]}`}>
                                                        {news.title[this.props.langs.data]}
                                                    </Link>
                                                    <div className="news__header-date">
                                                        {dateformat(news.createdAt[this.props.langs.data], "d mmm yyyy")}
                                                    </div>
                                                </header>
                                                <div className="news__main">
                                                    <div className="news__short-content"
                                                         dangerouslySetInnerHTML={{__html: news.description[this.props.langs.data]}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        : <div key={index}></div>
                                )}
                            </div>
                            {!this.state.isAllNews &&
                            <div className="newsList__actions actions">
                                <a className="actions__moreBtn"
                                   onClick={this.handleClickLoadNews}>{dictionary.more_news[this.props.langs.data]}</a>
                            </div>}
                        </div>
                        :
                        <Loader/>
                    }
                </div>
            </div>
        )
    }
}
