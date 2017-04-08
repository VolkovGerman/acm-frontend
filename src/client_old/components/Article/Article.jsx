import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import ArticleHeader from '../ArticleHeader/ArticleHeader';

require('./Article.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_1.jpg');

class Article extends Component {
    render() {
        return (
            <div className="Article article">
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

                <div className="article__footer">
                    {/*<div className="article__tags">*/}
                        {/*<div className="article__taggedUnder">Теги:</div>*/}
                        {/*<ul className="article__tagsList clearfix">*/}
                            {/*{this.props.article.tags.map((item, index) =>*/}
                                {/*<li className="article__tagsListItem" key={index}>*/}
                                       {/*<a className="article__tagsLink" href="#">{item.name}</a>*/}
                                {/*</li>*/}
                            {/*)}*/}
                        {/*</ul>*/}
                    {/*</div>*/}
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

