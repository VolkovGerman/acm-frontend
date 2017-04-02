import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import dateformat from 'dateformat';
require('./ArticleHeader.scss');

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Header header">
                <div className="header__date date">
                    <div className="date__day">{dateformat(this.props.item.createdAt, "d")}</div>
                    <div className="date__month">{dateformat(this.props.item.createdAt, "mmm yyyy")}</div>
                </div>
                <Link className="header__title"
                      to={`news/${this.props.item.systemName}`}>{this.props.item.title[this.props.lang.currentLangIndex]}</Link>
                <div className="news__info info">
                    <div className="info__item">
                        <div className="info__image info__image_views"/>
                        <div className="info__value">{this.props.item.views}</div>
                    </div>
                    <div className="info__item">
                        <div className="info__image info__image_langs"/>
                        <div className="info__value">{this.props.lang.currentLang}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Header);
