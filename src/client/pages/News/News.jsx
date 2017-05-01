import React from 'react';
import { Link } from 'react-router';

import Article from './Article/Article';
import LastNews from './LastNews/LastNews';

import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

import './News.scss';

export default class News extends React.Component {

    componentWillMount() {
        if (this.props.news.data.length === 0) {
            this.props.handleLoadingNews();
        }

        // this.props.handleSetActiveNews(this.props.routeParams.systemName);

        this.props = {
            ...this.props,
            active: this.props.news.data.filter(_ => _.systemName === this.props.routeParams.systemName)[0]
        }
    }

    render() {
        console.log(this.props);

        return (
            <div className="News">
                {!this.props.news.isLoading && this.props.news.data.length
                    ?
                    <div className="content clearfix">
                        <div className="left">
                            <Article {...this.props} />
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
