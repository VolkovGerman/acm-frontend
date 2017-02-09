import React, {Component} from 'react';
import {Link} from 'react-router';
import {css} from 'aphrodite/no-important';
import {connect} from 'react-redux'
import styles from './TopMenuStyles';
import containerStyles from '../GeneralComponents/GridStyles';

class Menu extends Component {
    addMenuItem() {
        this.props.onAddMenuItem(this.menuItem.value);
        this.menuItem.value = '';
    }

    render() {
        return (
            <div className={css(styles.topMenu)}>
                <div className={css(containerStyles.container)}>
                    <div className={css(containerStyles.row)}>
                        <ul>
                            {this.props.menuStore.map((item, index) =>
                                <li className={css(styles.topMenu__item)} key={index}>
                                    <Link to={item.link} className={css(styles.topMenu__link)}>{item.label}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
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
)(Menu);
