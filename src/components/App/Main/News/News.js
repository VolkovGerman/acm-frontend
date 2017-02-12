import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {css} from 'aphrodite/no-important';
import {Link} from 'react-router';
import dateFormat from 'dateformat';

import grid from '../../../General/GridStyles';
import styles from './NewsStyles';

class News extends Component {
    init() {
        $.get('https://acm-backend.herokuapp.com/news?lang=ru',
            response => {
                this.props.onInit(response);
                if (typeof(this.props.onLoaded) !== "undefined") {
                    this.props.onLoaded()
                }
            }
        )
    }

    componentWillMount() {
        this.init();
    }

    render() {
        return (
            <div className={css(grid.container, grid.clearfix)}>
                <div className="news">
                    <h2 className={css(styles.news__header)}>
                        Новости
                    </h2>

                    <div className="news__main">
                        {this.props.news.map((item, index) =>
                            <div className={css(styles.newsItem)} key={index}>
                                <div className={css(styles.newsItem__header)}>
                                    <div className={css(styles.newsItem__date)}>
                                        {dateFormat(item.date, "longDate")}
                                    </div>
                                    <h2 className={css(styles.newsItem__title)}>
                                        <Link className={css(styles.newsItem__link)} to={`news/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className={css(styles.newsItem__main)}>
                                    <div className={css(styles.newsItem__description)}>
                                        {item.descr}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        news: state.news
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_NEWS', payload: _})
    })
)(News);
