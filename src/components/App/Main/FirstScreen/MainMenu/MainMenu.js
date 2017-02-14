import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux'
import {Link} from 'react-router';

import styles from './MainMenuStyles';

class MainMenu extends Component {
    render() {
        return (
            <ul className={css(styles.mainMenu)}>
                {this.props.menu.map((item, index) =>
                    <li className={css(styles.mainMenu__item)} key={index}>
                        <Link className={css(styles.mainMenu__link)} to={item.href}>{item.name}</Link>
                    </li>
                )}
            </ul>
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