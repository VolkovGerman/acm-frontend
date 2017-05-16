import React from 'react';
import { Link } from 'react-router';

import moment from 'moment';
import Transformer from '../../../../core/scripts/transformer';

import dictionary from './LastNews.words';

import './LastNews.scss';            
                            
export default (props) => {
    return (
        <div className="LastNews last">
            <div className="last__header">
                {dictionary.last_news[props.langs.data]}
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
                                <div className="newsItem__date">{moment(item.date).format('MM.DD.YYYY, hh:mm')}</div>
                                <div className="newsItem__description"
                                    dangerouslySetInnerHTML={{__html: Transformer.textEllipsis(item.description[props.langs.data], 128)}}/>
                            </div>
                            : <div key={index}></div>
                    )}
                </div>
                {/*<Link className="last__link" to="/news">{dictionary.all_news[props.langs.data]}</Link>*/}
            </div>
        </div>
    );
}
