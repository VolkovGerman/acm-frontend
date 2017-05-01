import React from 'react';

import Article from './Article/Article';
import LastNews from './LastNews/LastNews';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

import './News.scss';

export default class News extends React.Component {

    componentWillMount() {
        !this.props.news.data.length ? this.props.handleLoadingNews() : null;
    }

    render() {
        let newsItem = this.props.news.data.filter(_ => _.systemName === this.props.routeParams.systemName)[0];

        const pageName = newsItem
            ? { ru: newsItem.title.ru, en: newsItem.title.en }
            : { ru: this.props.routeParams.systemName, en: this.props.routeParams.systemName };
        
        const breadcrumbs = [
            { name: { ru: 'Новости', en: 'News' }, link: '/news' },
            { name: { ru: pageName.ru, en: pageName.en }, link: `/news/${this.props.routeParams.systemName}` },
        ];

        return (
            <div className="News">
                <Breadcrumbs breadcrumbs={breadcrumbs} {...this.props} />
                {!this.props.news.isLoading && this.props.news.data.length
                    ?
                    <div className="content clearfix">
                        <div className="left">
                            <Article {...this.props} el={newsItem}/>
                        </div>
                        <div className="right">
                            <LastNews {...this.props} />
                        </div>
                    </div>
                    :
                    <Loader/>
                }
            </div>
        )
    }

};
