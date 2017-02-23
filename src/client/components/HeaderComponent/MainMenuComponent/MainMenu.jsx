import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router';

require('./MainMenu.scss');

class MainMenu extends Component {

    componentWillMount() {
        this.props.onInit([
            {
                href: '/champs',
                name: 'Чемпионат БГУИР'
            },
            {
                href: '/competitions',
                name: 'Соревнования'
            },
            {
                href: '/school',
                name: 'Школа олимпиадника'
            }
        ]);
    }

    render() {
        return (
            <div className="MainMenu">
                <ul className="mainMenu clearfix">
                    {this.props.menu.map((item, index) =>
                        <li className="mainMenu__item" key={index}>
                            <Link className="mainMenu__link" to={item.href}>{item.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        menu: state.menu
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_MENU', payload: _})
    })
)(MainMenu);
