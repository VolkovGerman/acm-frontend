import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {Link} from 'react-router';
import IScroll from 'iscroll';
import dateFormat from 'dateformat';

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
                <header className="news__header">
                    <div className={css(grid.container)}>
                        <h2 className="styles.news__title">News</h2>
                    </div>
                </header>
                <div className={`${css(styles.news__main)} news__main_scrollable`}>
                    <div className={css(styles.news__scroller)}>
                        <ul className={css(styles.news__list, grid.clearfix)}>
                            {this.props.news.map((item, index) =>
                                <li className={css(styles.newsItem, index === 0 ? styles.newsItem_big : null)}
                                    key={index}>
                                    <header className={css(styles.newsItem__title)}>
                                        <Link to={`news/${item.id}`} className={css(styles.newsItem__titleLink)}>
                                            News Item One
                                        </Link>
                                    </header>
                                    <div className="newsItem__main">
                                        <div className={css(styles.newsItem__description)}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            <Link to={`news/${item.id}`}
                                                  className={css(styles.newsItem__descriptionLink)}>
                                                News Item One
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            )}
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
