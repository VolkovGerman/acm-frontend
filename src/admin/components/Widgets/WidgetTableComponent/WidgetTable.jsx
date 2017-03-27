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
        };

        this.checked = [];
        this.checkRow = this.checkRow.bind(this);
        this.deleteRows = this.deleteRows.bind(this);
    }

    checkRow(id) {
        let index = this.checked.indexOf(id);
        if (index === -1) {
            this.checked.push(id);
        } else {
            this.checked.splice(index, 1);
        }
    }

    deleteRows() {
        console.log(this.checked);
    }

    render() {
        return (
            <div className="WidgetTable">
                <div className="bar clearfix">
                    <div className="bar__amount">
                        Показать
                        <div className="bar__select">
                            <WidgetSelect options={this.state.entityPerPage}/>
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

                    {/*<div className="bar__buttons">*/}
                        {/*{this.props.table.actions.map((item, index) =>*/}
                            {/*<Link className="bar__buttonsLink" to={item.link} key={index}>{item.name}</Link>*/}
                        {/*)}*/}
                    {/*</div>*/}
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
                        {this.props.table.fields.map((item, index) =>
                            <th key={index}>{item}</th>
                        )}
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.table.data.map((data, dataIndex) =>
                        <tr className={dataIndex % 2 ? 'ood' : 'even'} key={dataIndex}>
                            <td className="checkbox">
                                <div className="widgetTable__checkbox">
                                    <WidgetCheckBox />
                                </div>
                            </td>
                            <td className="number">{dataIndex + 1}</td>
                            {data.cells.map((item, itemIndex) =>
                                <td key={itemIndex}>{item}</td>
                            )}
                            <td data-id={data.id} className="actions">
                                <Link to={`${data.actions.update}?id=${data.id}`} className="actions__link">Изменить</Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div className="pagination">
                    <WidgetPagination data={this.props.table.data}/>
                </div>
            </div>
        )
    }
}

export default WidgetTable;
