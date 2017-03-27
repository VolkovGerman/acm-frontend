import React, {Component} from 'react';

import Article from './ArticleComponent/Article';
import LatestNews from './LatestNewsComponent/LatestNews';
import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';
import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';
import config from '../../../core/config/general.config';
import {hashHistory} from 'react-router';

require('./News.scss');

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: {},
            numberOfComponents: 2,
            latestNews: [],
            breadcrumbs: [
                {
                    link: '/',
                    name: 'Главная'
                },
                {
                    link: '/news',
                    name: 'Новости'
                }
            ],
        }
    }

    loadingNewsBySystemName = ($systemName) => {
        fetch(`${config.server}/news/search/findBySystemName?systemName=${$systemName}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(news => {
                let article = news['_embedded']['news'][0];
                let breadcrumbs = this.state.breadcrumbs;
                breadcrumbs.push({
                    link: '/news/' + article.systemName,
                    name: article.systemName
                });
                this.setState({
                    breadcrumbs: breadcrumbs
                });
                this.loadingTags(article);
            });
    };

    loadingTags = (article) => {
        fetch(`${article._links.tags.href}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                article.tags = _['_embedded']['tags'];
                this.setState({
                    article: article
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });
    };

    loadingLatestNews = () => {
        fetch(`${config.server}/news`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(latestNews => {
                this.setState({
                    latestNews: latestNews['_embedded']['news']
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });
    };

    componentDidMount = () => {
        this.loadingNewsBySystemName(this.props.params.systemName);
        this.loadingLatestNews();
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render() {
        if (this.props.isLoaded()) {
            return (
                <div className="News clearfix">
                    <Breadcrumbs breadcrumbs={this.state.breadcrumbs}/>
                    <TwoColumns layout={{
                        general: <Article article={this.state.article}/>,
                        sub: <LatestNews latestNews={this.state.latestNews}/>
                    }}/>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default News;
