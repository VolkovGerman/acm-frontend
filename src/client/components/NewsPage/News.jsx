import React, {Component} from 'react';

import Article from './ArticleComponent/Article';
import LatestNews from './LatestNewsComponent/LatestNews';
import TwoColumns from '../LayoutsComponents/TwoColumnsComponent/TwoColumns';
import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./News.scss');

const pageParams = {
    breadcrumbs: [
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/news',
            name: 'Новости'
        },
        {
            link: '/news/1',
            name: 'Название новости'
        }
    ],
}

class News extends Component {
    render() {
        return (
            <div className="News clearfix">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs}/>
                <TwoColumns layout={{
                    general: <Article item={{id: this.props.params.news_id}}/>,
                    sub: <LatestNews />
                }}/>
            </div>
        );
    }
}

export default News;
