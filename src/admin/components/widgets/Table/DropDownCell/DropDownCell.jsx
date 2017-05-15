import React from 'react';
import {Link} from 'react-router';
import Dom from '../../../../../core/lib/dom';

import './DropDown.scss';

export default class DropDownCell extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickOpenMenu = this.handleClickOpenMenu.bind(this);

        this.state = {
            isActive: false
        };

        Dom.outerClick(`DropDownCell__link ${this.props.id}`, (e) => {
            this.setState(_ => ({
                isActive: false
            }));
        });
    }

    static propTypes = {
        gug: React.PropTypes.string,
        items: React.PropTypes.array
    };

    static defaultProps = {
        gug: 'Действия',
        items: []
    };

    handleClickOpenMenu = (e) => {
        this.setState(_ => ({
            isActive: !_.isActive
        }));
        e.preventDefault();
    };

    render = () =>
        <td className="DropDownCell">
            <Link className={`DropDownCell__link ${this.props.id}`} to="#" onClick={this.handleClickOpenMenu}>{this.props.gug}</Link>
            {this.state.isActive &&
            <div className="DropDownCell__dropBox dropBox">
                {this.props.items.map((item, index) =>
                    <Link className="DropDownCell__link dropBox__link" to={item.link} key={index}>{item.name}</Link>
                )}
            </div>
            }
        </td>
}
