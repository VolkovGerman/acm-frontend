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
            <div className={css(grid.container, grid.clearfix)}>
                <div className="news">
                    <h2 className={css(styles.news__header)}>
                        {this.props.dictionary.news}
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
        news: state.news,
        dictionary: state.dictionary
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_NEWS', payload: _})
    })
)(News);
