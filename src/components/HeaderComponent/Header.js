import React, {Component} from 'react';
import MainMenu from '../MainMenuComponent/MainMenu';
import styles from '../HeaderComponent/HeaderStyles';
import grid from '../GeneralComponents/GridStyles';
import {css} from 'aphrodite/no-important';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className={css(styles.header__menu)}>
                    <div className={css(grid.container)}>
                        <MainMenu />
                        <div className={css(grid.clearfix)}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
