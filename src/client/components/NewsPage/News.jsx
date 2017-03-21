import React, {Component} from 'react';

import Article from './ArticleComponent/Article';
import LatestNews from './LatestNewsComponent/LatestNews';
import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';
import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';
import config from '../../../core/config/general.config';

require('./News.scss');

let pageParams = {};

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: {}
        }
    }

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    componentDidMount = () => {
        fetch(`${config.server}/news/search/findBySystemName?systemName=${this.props.params.systemName}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                let article = _['_embedded']['news'][0];
                pageParams.breadcrumbs.push({
                    link: '/news/' + article.systemName,
                    name: article.systemName
                });

                this.getTags(article);
            });
    };

    getTags = (article) => {
        fetch(`${article._links.tags.href}`, {
            method: 'get'
        })
            .then(_ => _.json())
            .then(_ => {
                article.tags = _['_embedded']['tags'];
                this.setState({
                    article: article
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    componentWillMount = () => {
        pageParams = {
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
        };
    };

    render() {
        if (this.props.isLoaded()) {
            console.log(this.state.article)
            return (
                <div className="News clearfix">
                    <Breadcrumbs breadcrumbs={pageParams.breadcrumbs} />
                    <TwoColumns layout={{
                        general: <Article article={this.state.article} />,
                        sub: <LatestNews />
                    }}/>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default News;
