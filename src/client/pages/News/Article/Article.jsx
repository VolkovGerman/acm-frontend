import React from 'react';
import { Link } from 'react-router';

import moment from 'moment';

const img = require('../../../../../static/images/logo/logo1024x512.jpg');

import './Article.scss';            
                            
export default (props) => {
    return (
        <div className="Article">
            <div className="article">
                <div className="article__header article-header">
                    <div className="article-header__date date">
                        <div className="date__day">{moment(props.el.createdAt).format('DD')}</div>
                        <div className="date__month">{moment(props.el.createdAt).format('MM/YYYY')}</div>
                    </div>
                    <Link className="article-header__title"
                        to={`/news/${props.el.systemName}`}>{props.el.title[props.langs.data]}</Link>
                    <div className="news__info info">
                        <div className="info__item">
                            <div className="info__image info__image_views"/>
                            <div className="info__value">{props.el.views}</div>
                        </div>
                        <div className="info__item">
                            <div className="info__image info__image_langs"/>
                            <div className="info__value">{props.el.status.ru ? props.el.status.en ? 'рус, eng' : 'рус' : 'eng'}</div>
                        </div>
                    </div>
                </div>
                <div className="article__main">
                    <div className="article__imageBlock">
                        <a href="#" className="article__imageLink">
                            <img className="article__image" src={props.el.img || img}/>
                        </a>
                    </div>
                    <div className="article__content"
                        dangerouslySetInnerHTML={{__html: props.el.content[props.langs.data]}}></div>
                </div>
            </div>
        </div>
    );
}    
