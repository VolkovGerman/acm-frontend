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
                    <ArticleHeader item={{id: this.props.item}}/>
                </div>

                <div className="article__main">
                    <div className="article__imageBlock">
                        <a href="#" className="article__imageLink">
                            <img className="article__image" src={img}/>
                        </a>
                    </div>
                    <div className="article__content">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa deleniti ducimus
                            eaque eum, ex, illum maiores molestias mollitia officiis placeat quae recusandae repellendus
                            reprehenderit, saepe sunt ut velit voluptas!
                        </div>
                        <div>Ab aliquam, atque blanditiis cum, cumque dignissimos est et incidunt itaque labore
                            molestias necessitatibus quae ratione rerum vitae. Corporis cumque enim excepturi facere
                            ipsam modi necessitatibus nesciunt odio recusandae rerum.
                        </div>
                        <div>Ab facere minima nobis non, officiis vero voluptatem! Aliquam atque debitis dolorum enim
                            error excepturi laboriosam necessitatibus odio perferendis sapiente, sequi, sint tenetur ut?
                            Alias distinctio labore mollitia ut voluptatum!
                        </div>
                        <div>Ab adipisci aspernatur, autem dolores enim eum eveniet ex facere libero nulla numquam
                            pariatur sapiente, sunt ut, vel veritatis vitae. Ab alias, distinctio dolorem hic incidunt
                            ipsum possimus praesentium voluptatem?
                        </div>
                        <div>Accusantium alias aperiam cupiditate doloribus dolorum ea eaque ex incidunt itaque iure
                            laudantium libero minima molestias natus, odio possimus, quam sunt temporibus ut velit!
                            Adipisci maiores nihil perferendis totam voluptatem.
                        </div>
                    </div>
                </div>

                <div className="article__footer">
                    <div className="article__tags">
                        <div className="article__taggedUnder">Теги:</div>
                        <ul className="article__tagsList clearfix">
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">Университет</a>
                            </li>
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">Обучение</a>
                            </li>
                            <li className="article__tagsListItem">
                                <a className="article__tagsLink" href="#">Новости</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
