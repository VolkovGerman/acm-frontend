import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import config from '../../../core/config/general.config';
import ArticleHeader from '../ArticleComponents/HeaderComponent/Header';
import News from '../HomePage/NewsComponent/News';

require('./AllNews.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_2.jpg');

class AllNews extends Component {

    componentDidMount = () => {
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        (
            <div className="AllNews">
                <News isLoaded={this.props.isLoaded} updateLoadedStatus={this.props.updateLoadedStatus}></News>
            </div>
        )
}

export default AllNews;
