import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {Link} from 'react-router';
import IScroll from 'iscroll';

import grid from '../../../General/GridStyles';
import styles from './NewsStyles';
import {requests} from '../../../../config/general'
import localizer from '../../../../config/localizer'

class News extends Component {
    init() {
        fetch(`${requests.news}?lang=${localizer.lang}`)
            .then(_ => _.json())
            .then(_ => this.props.onInit(_));
    }

    componentWillMount() {
        this.init();
    }

    componentDidUpdate() {
        window.scroll = new IScroll('.news__main_scrollable', {
            scrollX: true, scrollY: false, mouseWheel: true
        });
    }

    render() {
        return (
            <div className={css(styles.news)}>
                <header className={`${css(styles.news__header)}`}>
                    <h2 className="styles.news__title">Новости</h2>
                </header>
                <div className={`${css(styles.news__main)} news__main_scrollable`}>
                    <div className={css(styles.news__scroller)}>
                        <ul className={css(styles.news__list, grid.clearfix)}>
                            {this.props.news.map((item, index) =>
                                <li className={css(styles.newsItem, index === 0 ? styles.newsItem_big : null)} key={index}>
                                    <header className={css(styles.newsItem__header)}>
                                        <h3 className={css(styles.newsItem__title)}>
                                            <Link to={`news/${item.id}`} className={css(styles.newsItem__titleLink)}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <div className={css(styles.newsItem__date)}>
                                            07.08.2016
                                        </div>
                                    </header>
                                    <div className="newsItem__main">
                                        <div className={css(styles.newsItem__description)}>
                                            {item.descr}
                                        </div>
                                    </div>
                                    <div className={css(styles.newsItem__footer)}>
                                        <Link to={`news/${item.id}`} className={css(styles.newsItem__footerLink)}>
                                            Подробнее
                                        </Link>
                                    </div>
                                </li>
                            )}
                            <li className={css(styles.newsItem, styles.newsItem_more)}>
                                <Link to={`news/`} className={css(styles.newsItem_more__link)}>
                                    Все новости
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        news: state.news,
        dictionary: state.dictionary
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_NEWS', payload: _})
    })
)(News);
