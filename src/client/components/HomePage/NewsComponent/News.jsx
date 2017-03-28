import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../../ArticleComponents/HeaderComponent/Header';
import config from '../../../../core/config/general.config';
import devideProperties from '../../../../core/scripts/devidePropertiesByLanguage';
import dateformat from 'dateformat';

require('./News.scss');

let img = require('../../../../../static/images/backgrounds/bg_slider_2.jpg');

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }

    componentDidMount = () => {
        fetch(`${config.server}/news`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.props.updateLoadedStatus(true, 1);
                let news = devideProperties(_['_embedded']['news']);
                this.setState({
                    news: news
                });
            });
    };

    render() {
        if (this.props.isLoaded()) {
            return (
                <div className="News">
                    <div className="newsList">
                        <header className="newsList__header">
                            <Link className="newsList__title" to={'news'}>{this.props.lang.news}</Link>
                        </header>
                        <div className="newsList__content">
                            <div className="newsList__list">
                                {this.state.news.map((item, index) =>
                                    item.status[this.props.lang.currentLangIndex] ?
                                        <div className="news clearfix" key={index}>
                                            <div className="news__left">
                                                <Link to={`news/${item.systemName}`} className="news__image-link">
                                                    <img className="news__image" src={img}/>
                                                </Link>
                                            </div>
                                            <div className="news__right">
                                                <header className="news__header">
                                                    <Link className="news__header-title" to={`news/${item.systemName}`}>
                                                        {item.title[this.props.lang.currentLangIndex]}
                                                    </Link>
                                                    <div className="news__header-date">
                                                        {dateformat(item.createdAt, "d")} {dateformat(item.createdAt, "mmm yyyy")}
                                                    </div>
                                                </header>
                                                <div className="news__main">
                                                    <div className="news__short-content"
                                                    dangerouslySetInnerHTML={{__html: item.description[this.props.lang.currentLangIndex]}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        : <div key={index}></div>
                                )}
                            </div>
                            <div className="newsList__actions actions">
                                <Link className="actions__moreBtn" to={`news`}>{this.props.lang.more_news}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(News);
