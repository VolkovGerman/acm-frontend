import React from 'react';
import {Link} from 'react-router';

import WidgetInput from '../Input/Input';
import WidgetCheckBox from '../CheckBox/CheckBox';
import WidgetPagination from '../Pagination/Pagination';
import WidgetSelect from '../Select/Select';
import DropDownCell from './DropDownCell/DropDownCell';

import './Table.scss';

export default class Table extends React.Component {
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
            ],
            table: {
                data: this.props.rows,
                fields: this.props.fields,
            },
            checkBoxes: {
                isActiveMain: false,
                itemsIds: [],
                isActive: []
            }
        };
        this.checkSingleRow = this.checkSingleRow.bind(this);
        this.checkAllRows = this.checkAllRows.bind(this);
        this.deleteRowsByIds = this.deleteRowsByIds.bind(this);
    }

    checkSingleRow(index) {
        let state = this.state;
        let itemId = state.table.data[index].id;
        let itemIdIndex = state.checkBoxes.itemsIds.indexOf(itemId);

        itemIdIndex === -1 ? state.checkBoxes.itemsIds.push(itemId) : state.checkBoxes.itemsIds.splice(itemIdIndex, 1);
        state.checkBoxes.isActive[index] = !state.checkBoxes.isActive[index];
        state.checkBoxes.isActiveMain = state.checkBoxes.itemsIds.length === state.table.data.length;

        this.setState(state);
    }

    checkAllRows() {
        let state = this.state;

        if (state.checkBoxes.isActiveMain) {
            state.checkBoxes = {
                isActiveMain: false,
                itemsIds: [],
                isActive: []
            };
        } else {
            state.checkBoxes = {
                isActiveMain: true,
                itemsIds: state.table.data.map(function (item) {
                    return item.id;
                }),
                isActive: state.table.data.map(function () {
                    return true;
                })
            }
        }

        this.setState(state);
    }

    deleteRowsByIds(e) {
        e.preventDefault();
        let state = this.state;
        let itemsIds = state.checkBoxes.itemsIds;
        this.props.delete(itemsIds);
        state.table.data = state.table.data.filter(function (dataItem) {
            return itemsIds.indexOf(dataItem.id) === -1;
        });
        state.checkBoxes = {
            isActiveMain: false,
            itemsIds: [],
            isActive: []
        };
        this.setState(state);
    }

    render() {
        return (
            <div className="WidgetTable">
                <div className="bar clearfix">
                    {/*<div className="bar__amount">*/}
                        {/*Показать*/}
                        {/*<div className="bar__select">*/}
                            {/*<WidgetSelect options={this.state.entityPerPage}/>*/}
                        {/*</div>*/}
                        {/*записей*/}
                    {/*</div>*/}

                    {/*<div className="bar__search">*/}
                        {/*<div className="bar__searchLabel">*/}
                            {/*Поиск:*/}
                        {/*</div>*/}
                        {/*<div className="bar__searchInput">*/}
                            {/*<WidgetInput name="search" type="search"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {this.props.actions.delete ?
                        <div className="bar__buttons">
                            <Link className="bar__buttonsLink" onClick={this.deleteRowsByIds} href="#">Удалить</Link>
                        </div>
                        : <div></div>
                    }
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
                                <WidgetCheckBox check={this.checkAllRows}
                                                isActive={this.state.checkBoxes.isActiveMain}/>
                            </div>
                        </th>
                        <th>#</th>
                        {this.state.table.fields.map((item, index) =>
                            <th key={index}>{item}</th>
                        )}
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.table.data.map((data, dataIndex) =>
                        <tr className={dataIndex % 2 ? 'ood' : 'even'} key={dataIndex}>
                            <td className="checkbox">
                                <div className="widgetTable__checkbox">
                                    <WidgetCheckBox check={this.checkSingleRow} index={dataIndex}
                                                    isActive={this.state.checkBoxes.isActive[dataIndex]}/>
                                </div>
                            </td>
                            <td className="number">{dataIndex + 1}</td>
                            {data.cells.map((item, itemIndex) =>
                                <td key={itemIndex} dangerouslySetInnerHTML={{__html: item}}></td>

                            )}
                            {/*<td data-id={data.id} className="actions">*/}
                            {/*/!*<Link to={`${data.actions.update}?id=${data.id}`}*!/*/}
                            {/*/!*className="actions__link">Изменить</Link>*!/*/}
                            {/*<DropDownCell/>*/}
                            {/*</td>*/}
                            <DropDownCell id={dataIndex} items={data.actions}/>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div className="pagination">
                    <WidgetPagination data={this.state.table.data}/>
                </div>
            </div>
        )
    }
}
