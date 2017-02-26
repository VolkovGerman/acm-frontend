import React, {Component} from 'react';
import {Link} from 'react-router';

require('./WidgetPagination.scss');

class WidgetPagination extends Component {
    render() {
        return (
            <div className="WidgetPagination clearfix">
                <div className="WidgetPagination__info">
                    Показаны 1-10 из 57 записей
                </div>

                <div className="WidgetPagination__pagination">
                    <ul className="WidgetPagination__list clearfix">
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">Previous</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">1</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">2</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink active" to="/">3</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">4</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">5</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">6</Link>
                        </li>
                        <li className="WidgetPagination__listItem">
                            <Link className="WidgetPagination__listLink" to="/">Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default WidgetPagination;
