import React, {Component} from 'react';
import {Link} from 'react-router';

import WidgetInput from '../WidgetInputComponent/WidgetInput';
import WidgetCheckBox from '../WidgetCheckBoxComponent/WidgetCheckBox';
import WidgetPagination from '../WidgetPaginationComponent/WidgetPagination';

require('./WidgetTable.scss');

class WidgetTable extends Component {
    render() {
        return (
            <div className="WidgetTable">
                <div className="bar clearfix">
                    <div className="bar__amount">
                        Показать
                        <select className="bar__amountSelect">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        записей
                    </div>

                    <div className="bar__search">
                        <div className="bar__searchLabel">
                            Поиск:
                        </div>
                        <div className="bar__searchInput">
                            <WidgetInput name={'search'} type={'search'}/>
                        </div>
                    </div>

                    <div className="bar__buttons">
                        <Link className="bar__buttonsLink" to="/">Скопировать</Link>
                        <Link className="bar__buttonsLink" to="/">Удалить</Link>
                        <Link className="bar__buttonsLink" to="/">Редактировать</Link>
                        <Link className="bar__buttonsLink" to="/">Кнопка</Link>
                    </div>
                </div>
                <table className="widgetTable">
                    <thead>
                    <tr className="widgetTable__head">
                        <th>
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
                        <td className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scram...
                        </td>
                        <td className="date">Monday 23, 2015</td>
                    </tr>
                    <tr className="even">
                        <td className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </td>
                        <td className="number">2</td>
                        <td className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the ind and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum...
                        </td>
                        <td className="date">Monday 23, 2015</td>
                    </tr>
                    <tr className="odd">
                        <td className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </td>
                        <td className="number">3</td>
                        <td className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to m...
                        </td>
                        <td className="date">Monday 23, 2015</td>
                    </tr>
                    <tr className="even">
                        <td className="checkbox">
                            <div className="widgetTable__checkbox">
                                <WidgetCheckBox />
                            </div>
                        </td>
                        <td className="number">4</td>
                        <td className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to...
                        </td>
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
