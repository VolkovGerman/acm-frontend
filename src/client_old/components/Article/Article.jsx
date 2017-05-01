import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../ArticleHeader/ArticleHeader';

require('./Article.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_1.jpg');

class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="article__header">
                    <ArticleHeader item={this.props.article}/>
                </div>
                <div className="article__main">
                    <div className="article__imageBlock">
                        <a href="#" className="article__imageLink">
                            <img className="article__image" src={img}/>
                        </a>
                    </div>
                    <div className="article__content"
                         dangerouslySetInnerHTML={{__html: this.props.article.content[this.props.lang.currentLangIndex]}}></div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Article);

