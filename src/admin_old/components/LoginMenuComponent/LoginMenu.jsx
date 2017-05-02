import React, {Component} from 'react';

require('./LoginMenu.scss');

class LoginMenu extends Component {
    render() {
        return (
            <div className="LoginMenu">
                <a className="openMenu" href="#"/>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__link login-item" href="/logout">
                            <div className="login-item__img"/>
                            <div className="login-item__name">Выйти</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LoginMenu;
