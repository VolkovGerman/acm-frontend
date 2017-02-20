import React, {Component} from 'react';
import {Link} from 'react-router';

require('./News.scss');

let img = require('../../../../../static/images/backgrounds/bg_slider_2.jpg');

class News extends Component {
    render() {
        return (
            <div className="News">
                {this.props.news.map((item, index) =>
                <div className="news" key={index}>
                    <div className="news__header clearfix">
                        <div className="news__date date">
                            <div className="date__day">14</div>
                            <div className="date__month">Апр 2016</div>
                        </div>
                        <a className="news__title" href="/">БГУИР - в финале ACM ICPC</a>
                        <div className="news__author author">Тема:
                            <span className="author__name"> Соревнования</span>
                        </div>
                    </div>
                    <div className="news__main">
                        <a href="/" className="news__image-link">
                            <img className="news__image" src={img}/>
                        </a>
                        <div className="news__short-content">Команда БГУИР представит Беларусь в финале престижного
                            мирового первенства по программированию среди студентов в США. Это стало известно на
                            завершившемся 4 декабря в Санкт-Петербурге 21-ом полуфинале Северо-Восточного Европейского
                            региона командного чемпионата мира по программирования The ACM ICPC.
                        </div>
                    </div>
                    <div className="news__footer clearfix">
                        <Link className="news__buttons buttons" to="/">
                            <div className="buttons__button">Подробнее...</div>
                        </Link>
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default News;