import React, {Component} from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

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
                            <div className="newsList__item newsItem" key={index}>
                                <div className="newsItem__title">
                                    <Link className="newsItem__link"
                                          to={`news/${item.systemName}`}>{item.titleRU}</Link>
                                </div>
                                <div className="newsItem__date">Mon, 02 Jun 2014</div>
                                <div className="newsItem__description"
                                     dangerouslySetInnerHTML={{__html: item.descriptionRU}}></div>
                            </div>
                        )}
                    </div>
                    <Link className="latestNews__link" to="/news">Все новости</Link>
                </div>
            </div>

        );
    }
}

export default LatestNews;
