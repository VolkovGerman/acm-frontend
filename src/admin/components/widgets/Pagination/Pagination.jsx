import React from 'react';
import {Link} from 'react-router';

require('./Pagination.scss');

export default class WidgetPagination extends React.Component {
    render() {
        return (
            <div className="WidgetPagination clearfix">
                <div className="WidgetPagination__info">
                    Показаны 1-{this.props.data.length} из {this.props.data.length} записей
                </div>

                <div className="WidgetPagination__pagination">
                    <ul className="WidgetPagination__list clearfix">
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" >Previous</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink active">1</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" >Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
