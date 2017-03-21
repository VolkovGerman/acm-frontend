import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../ArticleComponents/HeaderComponent/Header';

require('./AllNews.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_2.jpg');

class AllNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    id: 1,
                    title: 'Pidory'
                },
                {
                    id: 2,
                    title: 'ASDASd'
                }
            ]
        }
    }

    componentDidMount() {

    }

    render = () =>
        (
            <div className="AllNews">
                <div className="newsList">
                    <header className="newsList__header">
                        <div className="newsList__title">Новости</div>
                    </header>
                    <div className="newsList__content">
                        <div className="newsList__list">
                            {this.state.news.map((item, index) =>
                                <div className="news" key={index}>
                                    <div className="news__header">
                                        <ArticleHeader item={item}/>
                                    </div>
                                    <div className="news__main">
                                        <Link to={`news/${item.id}`} className="news__image-link">
                                            <img className="news__image" src={img}/>
                                        </Link>
                                        <div className="news__short-content">Команда БГУИР представит Беларусь в финале престижного
                                            мирового первенства по программированию среди студентов в США. Это стало известно на
                                            завершившемся 4 декабря в Санкт-Петербурге 21-ом полуфинале Северо-Восточного
                                            Европейского
                                            региона командного чемпионата мира по программирования The ACM ICPC.
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="newsList__actions actions">
                            Всего новостей: {this.state.news.length}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default AllNews;
