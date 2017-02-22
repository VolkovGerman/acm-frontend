import React, {Component} from 'react';
import {Link} from 'react-router';

import ArticleHeader from '../../ArticleComponents/HeaderComponent/Header';

require('./Article.scss');

let img = require('../../../../../static/images/backgrounds/bg_slider_1.jpg');

class Article extends Component {
    render() {
        return (
            <div className="Article article">
                <div className="article__header">
                    <ArticleHeader item={{id: this.props.item}} />
                </div>

                <div className="article__imageBlock">
                    <a href="#" className="article__imageLink">
                        <img className="article__image" src={img}/>
                    </a>
                </div>

                <div className="article__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum, libero id imperdiet elementum, nunc quam gravida mi, vehicula euismod magna lacus ornare mauris. Proin euismod scelerisque risus. Vivamus imperdiet hendrerit ornare.</p>
                    <p>Donec a imperdiet mi. Nulla quis tincidunt ante, id congue mi. Mauris gravida dolor sit amet sem pellentesque, sed pellentesque nulla varius. Sed congue, sapien ut pulvinar auctor, lectus eros tristique sapien, quis elementum risus ante eu justo. Aenean gravida velit odio, sit amet gravida velit suscipit id.</p>
                    <ul>
                        <li>Nunc viverra elit risus, adipiscing placerat nibh malesuada nec.</li>
                        <li>Vivamus bibendum condimentum lacus, id fermentum dolor. Cras placerat nisl sed eros rutrum porttitor.</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum, libero id imperdiet elementum, nunc quam gravida mi, vehicula euismod magna lacus ornare mauris. Proin euismod scelerisque risus. Vivamus imperdiet hendrerit ornare. Phasellus dapibus imperdiet nibh, nec sagittis odio condimentum sed.</p>
                </div>

                <div className="article__footer">
                    <div className="article__tags">
                        <span className="article__taggedUnder">Tagged under</span>
                        <ul className="article__tagsList">
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">university</a>
                            </li>
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">education</a>
                            </li>
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">news</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
