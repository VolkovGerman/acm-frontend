import React, {Component} from 'react';
import {Link} from 'react-router';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux'
import $ from 'jquery';

import styles from './MainMenuStyles';

class MainMenu extends Component {
    init() {
        $.get('https://acm-backend.herokuapp.com/pages',
            response => {
                this.props.onInit(response.filter(_ => +_.level === 0));
                this.props.onLoaded();
            },
            'json'
        );
    }

    componentWillMount() {
        this.init();
    }

    render() {
        return (
            <ul className={css(styles.mainMenu)}>
                {this.props.menuStore.map((item, index) =>
                    <li className={css(styles.mainMenu__item)} key={index}>
                        <Link to={item.href} className={css(styles.mainMenu__link)}>{item.name}</Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default connect(
    state => ({
        menuStore: state.menu
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_MENU', payload: _})
    })
)(MainMenu);
