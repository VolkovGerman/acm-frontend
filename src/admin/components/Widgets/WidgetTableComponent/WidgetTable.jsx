import React, {Component} from 'react';
import {Link} from 'react-router';

import WidgetInput from '../WidgetInputComponent/WidgetInput';
import WidgetCheckBox from '../WidgetCheckBoxComponent/WidgetCheckBox';
import WidgetPagination from '../WidgetPaginationComponent/WidgetPagination';
import WidgetSelect from '../WidgetSelectComponent/WidgetSelect';

require('./WidgetTable.scss');

class WidgetTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entityPerPage: [
                {
                    value: 10,
                    name: '10'
                },
                {
                    value: 15,
                    name: '15'
                }
            ]
        }
    }

    render() {
        return (
            <div className="WidgetTable">
                <div className="bar clearfix">
                    <div className="bar__amount">
                        Показать
                        <div className="bar__select">
                            <WidgetSelect options={this.state.entityPerPage} />
                        </div>
                        записей
                    </div>

                    <div className="bar__search">
                        <div className="bar__searchLabel">
                            Поиск:
                        </div>
                        <div className="bar__searchInput">
                            <WidgetInput name="search" type="search"/>
                        </div>
                    </div>

                    <div className="bar__buttons">
                        <Link className="bar__buttonsLink" to="/">Редактировать</Link>
                        <Link className="bar__buttonsLink" to="/">Удалить</Link>
                    </div>
                </div>
                <table className="widgetTable">
                    <thead>
                    <tr className="widgetTable__head">
                        <th className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </th>
                        <th>#</th>
                        <th>Краткое описание</th>
                        <th>Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="odd">
                        <td className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </td>
                        <td className="number">1</td>
                        <td className="description">Descr</td>
                        <td className="date">Monday 23, 2015</td>
                    </tr>
                    <tr className="even">
                        <td className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </td>
                        <td className="number">1</td>
                        <td className="description">Descr</td>
                        <td className="date">Monday 23, 2015</td>
                    </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <WidgetPagination />
                </div>
            </div>
        )
    }
}

export default WidgetTable;
