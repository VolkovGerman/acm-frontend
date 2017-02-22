import React, {Component} from 'react';
import {Link} from 'react-router';

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
                        <div className="newsList__item newsItem">
                            <div className="newsItem__title">
                                <Link className="newsItem__link" to="#">University theme for education website</Link>
                            </div>
                            <div className="newsItem__date">Mon, 02 Jun 2014</div>
                            <div className="newsItem__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Phasellus rutrum...</div>
                        </div>
                        <div className="newsList__item newsItem">
                            <div className="newsItem__title">
                                <Link className="newsItem__link" to="#">University theme for education website</Link>
                            </div>
                            <div className="newsItem__date">Mon, 02 Jun 2014</div>
                            <div className="newsItem__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Phasellus rutrum...</div>
                        </div>
                        <div className="newsList__item newsItem">
                            <div className="newsItem__title">
                                <Link className="newsItem__link" to="#">University theme for education website</Link>
                            </div>
                            <div className="newsItem__date">Mon, 02 Jun 2014</div>
                            <div className="newsItem__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Phasellus rutrum...</div>
                        </div>
                    </div>
                    <Link className="latestNews__link" to="/news">Все новости</Link>
                </div>
            </div>

        );
    }
}

export default LatestNews;
