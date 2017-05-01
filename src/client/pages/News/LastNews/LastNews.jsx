import React from 'react';
import { Link } from 'react-router';  

import dateformat from 'dateformat';
import Transformer from '../../../../core/scripts/transformer';

import './LastNews.scss';            
                            
export default (props) => {
    return (
        <div className="LastNews last">
            <div className="last__header">
                Последние новости
            </div>
            <div className="last__content">
                <div className="newsList">
                    {props.news.data.slice(0, 5).map((item, index) =>
                        item.status[props.langs.data] ?
                            <div className="newsList__item newsItem" key={index}>
                                <div className="newsItem__title">
                                    <Link className="newsItem__link"
                                        to={`/news/${item.systemName}`}>{item.title[props.langs.data]}</Link>
                                </div>
                                <div className="newsItem__date">{dateformat(item.date, "mmmm d, HH:MM")}</div>
                                <div className="newsItem__description"
                                    dangerouslySetInnerHTML={{__html: Transformer.textEllipsis(item.description[props.langs.data], 128)}}/>
                            </div>
                            : <div key={index}></div>
                    )}
                </div>
                <Link className="last__link" to="/news">Все новости</Link>
            </div>
        </div>
    );
}
