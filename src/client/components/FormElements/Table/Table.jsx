import React from 'react';
import {connect} from 'react-redux';

require('./Table.scss');

class TableWidget extends React.Component {
    render = () =>
        <div className="TableWidget">
            <table className="tableWidget">
                <thead className="tableHeader">
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell tableHeader__cell">#</td>
                    <td className="tableWidget__cell tableHeader__cell">{this.props.lang.registration_team_name}</td>
                    <td className="tableWidget__cell tableHeader__cell">{this.props.lang.university}</td>
                    <td className="tableWidget__cell tableHeader__cell">{this.props.lang.registration_country}</td>
                </tr>
                </thead>
                <tbody>
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell">1</td>
                    <td className="tableWidget__cell">Название один</td>
                    <td className="tableWidget__cell">БГУИР</td>
                    <td className="tableWidget__cell">Беларусь</td>
                </tr>
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell">1</td>
                    <td className="tableWidget__cell">Название один</td>
                    <td className="tableWidget__cell">БГУИР</td>
                    <td className="tableWidget__cell">Беларусь</td>
                </tr>
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell">1</td>
                    <td className="tableWidget__cell">Название один</td>
                    <td className="tableWidget__cell">БГУИР</td>
                    <td className="tableWidget__cell">Беларусь</td>
                </tr>
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell">1</td>
                    <td className="tableWidget__cell">Название один</td>
                    <td className="tableWidget__cell">БГУИР</td>
                    <td className="tableWidget__cell">Беларусь</td>
                </tr>
                <tr className="tableWidget__row">
                    <td className="tableWidget__cell">1</td>
                    <td className="tableWidget__cell">Название один</td>
                    <td className="tableWidget__cell">БГУИР</td>
                    <td className="tableWidget__cell">Беларусь</td>
                </tr>
                </tbody>
            </table>
        </div>
}

export default connect(
    state => ({
        lang: state.lang
    })
)(TableWidget);
