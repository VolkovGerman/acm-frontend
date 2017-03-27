import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../core/config/general.config';
import ArticleHeader from '../ArticleComponents/HeaderComponent/Header';
import News from '../HomePage/NewsComponent/News';
import Breadcrumbs from '../BreadcrumbsComponent/Breadcrumbs';

require('./AllNews.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_2.jpg');
let pageParams = {};

class AllNews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: {}
        }
    }

    componentWillUnmount = () => {
        this.props.setLoader();
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

    render = () =>
        (
            <div className="AllNews">
                <Breadcrumbs breadcrumbs={pageParams.breadcrumbs} />
                <News isLoaded={this.props.isLoaded} updateLoadedStatus={this.props.updateLoadedStatus}></News>
            </div>
        )
}

export default AllNews;
