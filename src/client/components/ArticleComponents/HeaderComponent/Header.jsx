import React, {Component} from 'react';
import {Link} from 'react-router';

require('./Header.scss');

class Header extends Component {
    render() {
        return (
            <div className="Header header">
                <div className="header__date date">
                    <div className="date__day">14</div>
                    <div className="date__month">Апр 2016</div>
                </div>
                <Link className="header__title" to={`news/${this.props.item.id}`}>БГУИР - в финале ACM ICPC</Link>
                <div className="header__author author">
                    <span className="author__written">Автор:</span>
                    <ul className="author__authors authors<">
                        <li className="authors__item">
                            <Link className="authors__link" to="#">Георгий Жуков</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
