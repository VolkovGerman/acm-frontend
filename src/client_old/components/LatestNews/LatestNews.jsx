import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import dateformat from 'dateformat';
import Transformer from '../../../core/scripts/transformer';

require('./LatestNews.scss');

class LatestNews extends Component {

    render() {
        return (
            <div className="LatestNews latestNews">
                <div className="latestNews__header">
                    Последние новости
                </div>
                <div className="latestNews__content">
                    <div className="newsList">
                        {this.props.latestNews.map((item, index) =>
                            item.status[this.props.lang.currentLangIndex] ?
                                <div className="newsList__item newsItem" key={index}>
                                    <div className="newsItem__title">
                                        <Link className="newsItem__link"
                                              to={`/news/${item.systemName}`}>{item.title[this.props.lang.currentLangIndex]}</Link>
                                    </div>
                                    <div className="newsItem__date">{dateformat(item.date, "mmmm d, HH:MM")}</div>
                                    <div className="newsItem__description"
                                         dangerouslySetInnerHTML={{__html: Transformer.textEllipsis(item.description[this.props.lang.currentLangIndex], 128)}}/>
                                </div>
                                : <div key={index}></div>
                        )}
                    </div>
                    <Link className="latestNews__link" to="/news">Все новости</Link>
                </div>
            </div>

        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(LatestNews);
