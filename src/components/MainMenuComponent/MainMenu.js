import React, {Component} from 'react';
import {Link} from 'react-router';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux'
import styles from './MainMenuStyles';

class MainMenu extends Component {
    addMenuItem() {
        this.props.onAddMenuItem(this.menuItem.value);
        this.menuItem.value = '';
    }

    render() {
        return (
            <ul className={css(styles.mainMenu)}>
                {this.props.menuStore.map((item, index) =>
                    <li className={css(styles.mainMenu__item)} key={index}>
                        <Link to={item.link} className={css(styles.mainMenu__link)}>{item.label}</Link>
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
        onAddMenuItem: (menuItem) => {
            const payload = {
                link: '/404',
                label: menuItem
            }
            dispatch({type: 'ADD_MENU_ITEM', payload: payload})
        }
    })
)(MainMenu);
