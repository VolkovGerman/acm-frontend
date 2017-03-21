import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../../ArticleComponents/HeaderComponent/Header';

require('./News.scss');

let img = require('../../../../../static/images/backgrounds/bg_slider_2.jpg');

class News extends Component {
    render() {
        return (
            <div className="News">
                <div className="newsList">
                    <header className="newsList__header">
                        <div className="newsList__title">Новости</div>
                    </header>
                    <div className="newsList__content">
                        <div className="newsList__list">
                            {this.props.news.map((item, index) =>
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
                            <Link className="actions__moreBtn"  to={`news`}>больше новостей</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(News);
