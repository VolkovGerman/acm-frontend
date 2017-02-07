import React, { Component } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux'
import styles from './MenuStyles';
import containerStyles from '../GeneralComponents/ContainerStyles';
import rowStyles from '../GeneralComponents/RowStyles';

class Menu extends Component {
    addMenuItem() {
        this.props.onAddMenuItem(this.menuItem.value);
        this.menuItem.value = '';
    }
    render() {
        return (
            <div className={css(styles.menu)}>
                <div className={css(containerStyles.container)}>
                    <div className={css(rowStyles.row)}>
                        <ul>
                            {this.props.menuStore.map((item, index) =>
                                <li className={css(styles.horizontalMenu__li)} key={index}>
                                    <Link to={item.link} className={css(styles.menu__item)}>{item.label}</Link>
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
            const payload =  {
                link: '/404',
                label: menuItem
            }
            dispatch({type: 'ADD_MENU_ITEM', payload: payload})
        }
    })
)(Menu);