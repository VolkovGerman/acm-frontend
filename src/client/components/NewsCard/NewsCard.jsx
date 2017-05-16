import React from 'react';
import { Link } from 'react-router';

import moment from 'moment';

import './NewsCard.scss';

const img = require('../../../../static/images/logo/logo256x150.jpg');

export default (props) =>
    <div className="newsCard clearfix">
        <div className="newsCard__left">
            <Link to={`/news/${props.news.systemName}`} className="newsCard__image-link">
                <img className="newsCard__image" src={props.news.img || img}/>
            </Link>
        </div>
        <div className="newsCard__right">
            <header className="newsCard__header">
                <Link className="newsCard__header-title" to={`/news/${props.news.systemName}`}>
                    {props.news.title[props.lang]}
                </Link>
                <div className="newsCard__header-date">
                    {moment(props.news.createdAt).format('DD.MM.YYYY, hh:mm')}
                </div>
            </header>
            <div className="newsCard__main">
                <div className="newsCard__short-content"
                        dangerouslySetInnerHTML={{__html: props.news.description[props.lang]}}></div>
            </div>
        </div>
    </div>
