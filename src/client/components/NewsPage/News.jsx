import React, {Component} from 'react';

import Breadcrumps from '../BreadcrumbsComponent/Breadcrumbs'

require('./News.scss');

let img = require('../../../../static/images/backgrounds/bg_slider_1.jpg');

class News extends Component {
    render() {
        return (
            <div className="News clearfix">
                {/*News №{this.props.params.news_id}*/}
                {/*<Breadcrumps />*/}
                <div className="article">
                    <div className="article__header">
                        <div className="article__date date">
                            <div className="date__day">14</div>
                            <div className="date__month">Апр 2016</div>
                        </div>
                        <h1 className="article__title">University theme for education website University theme for </h1>
                        <div className="article__author">
                            <span className="article__written">Автор статьи</span>
                            <ul className="article__authorList">
                                <li className="article__authorListItem">
                                    <a className="article__authorListLink" href="#">Георгий Жуков</a>
                                </li>
                            </ul>
                        </div>
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

                <div className="sidebar">
                    <h3 className="sidebar__header">
                        Latest news
                    </h3>
                    <ul className="sidebar__newsList">
                        <li className="sidebar__newsItem">
                            <h4 className="sidebar__newsHeader"><a className="sidebar__newsLink" href="#">University theme for education website</a></h4>
                            <p className="sidebar__newsDate">Mon, 02 Jun 2014</p>
                            <p className="sidebar__newsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</p>
                        </li>
                        <li className="sidebar__newsItem">
                            <h4 className="sidebar__newsHeader"><a className="sidebar__newsLink" href="#">University theme for education website</a></h4>
                            <p className="sidebar__newsDate">Mon, 02 Jun 2014</p>
                            <p className="sidebar__newsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</p>
                        </li>
                        <li className="sidebar__newsItem">
                            <h4 className="sidebar__newsHeader"><a className="sidebar__newsLink" href="#">University theme for education website</a></h4>
                            <p className="sidebar__newsDate">Mon, 02 Jun 2014</p>
                            <p className="sidebar__newsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum...</p>
                        </li>
                    </ul>
                    <a className="sidebar__link" href="#">Все новости</a>
                </div>
            </div>
        );
    }
}

export default News;
