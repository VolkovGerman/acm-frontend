import React, {Component} from 'react';

import Article from './ArticleComponent/Article';
import LatestNews from './LatestNewsComponent/LatestNews';
import TwoColumns from '../LayoutsLib/TwoColumnsComponent/TwoColumns';
import Breadcrumbs from '../Widgets/Breadcrumbs/Breadcrumbs';
import config from '../../../core/config/general.config';
import devideProperties from '../../../core/scripts/devidePropertiesByLanguage';

require('./News.scss');

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: {},
            numberOfComponents: 2,
            latestNews: [],
            breadcrumbs: [],
        }
    }

    initBreadCrumbs = (breadcrumb) => {
        this.setState({
            breadcrumbs: [
                {
                    link: '/news',
                    name: ['Новости', 'News']
                },
                {
                    link: breadcrumb.link,
                    name: breadcrumb.name
                }
            ]
        })
    };

    loadingNewsBySystemName = (systemName, numberOfComponents) => {
        fetch(`${config.server}/news/search/findBySystemName?systemName=${systemName}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(news => {
                let article = devideProperties(news['_embedded']['news'][0])[0];
                this.initBreadCrumbs({
                    link: '/news/' + article.systemName,
                    name: article.title
                });
                this.loadingTags(article, numberOfComponents);
            });
    };

    loadingTags = (article, numberOfComponents) => {
        fetch(`${article._links.tags.href}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(tags => {
                article.tags = tags['_embedded']['tags'];
                this.setState({
                    article: article
                });
                this.props.updateLoadedStatus(true, numberOfComponents);
            });
    };

    loadingLatestNews = (numberOfComponents, page, size) => {
        fetch(`${config.server}/news?page=${page}&size=${size}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(latestNews => {
                let lNews = devideProperties(latestNews['_embedded']['news']);
                this.setState({
                    latestNews: lNews
                });
                this.props.updateLoadedStatus(true, numberOfComponents);
            });
    };

    componentDidMount = () => {
        this.loadingNewsBySystemName(this.props.params.systemName, this.state.numberOfComponents);
        this.loadingLatestNews(this.state.numberOfComponents, 0, 5);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    componentWillUpdate = (nextProps) => {
        if (this.props.params.systemName != nextProps.params.systemName) {
            this.props.setLoader();
            this.loadingNewsBySystemName(nextProps.params.systemName, this.state.numberOfComponents - 1);
        }
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
