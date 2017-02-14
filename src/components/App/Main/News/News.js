import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'aphrodite/no-important';
import {Link} from 'react-router';
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

    render() {
        return (
            <div className={css(styles.news)}>
                <header className={css(news__header)}>
                    <div className={css(container)}>
                        <h2 className={css(news__title)}>News</h2>
                    </div>
                </header>
                <div className={css(news__main)}>
                    <ul className={css(news__list)}>
                        {this.props.news.map((item, index) =>
                            <li className={css(styles.newsItem, index == 0 ? styles.newsItem_big : null)} key={index}>
                                <header className={css(styles.newsItem__title)}>
                                    <Link to={`news/${item.id}`} className={css(styles.newsItem__titleLink)}>
                                        News Item One
                                    </Link>
                                </header>
                                <div className={css(styles.newsItemMain)}>
                                    <div className={css(styles.newsItemDescription)}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officia voluptate dolorum repellendus perspiciatis debitis laborum eos quos tempora illo.
                                        <Link to={`news/${item.id}`} className={css(styles.newsItem__descriptionLink)}>
                                            News Item One
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
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
