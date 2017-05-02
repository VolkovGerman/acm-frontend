import React from 'react';
import {Link} from 'react-router';
import Cookies from 'universal-cookie';

import './LoginMenu.scss';

export default class LoginMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }

    handleOpenMenu(e) {
        e.preventDefault();
        this.props.toggleMenu();
    }

    handleLogout(e) {
        e.preventDefault();

        new Cookies().remove('access_token');
        window.location.href = '/';
    }

    render() {
        return (
            <div className="LoginMenu">
                <Link className="openMenu" to="#" onClick={this.handleOpenMenu}/>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__link login-item" href="/logout" onClick={this.handleLogout}>
                            <div className="login-item__img"/>
                            <div className="login-item__name">Выйти</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
