import React, {Component} from 'react';

import MainMenu from './MainMenu/MainMenu';
import styles from './HeaderStyles';
import grid from '../General/GridStyles';
import {css} from 'aphrodite/no-important';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className={css(styles.header__menu)}>
                    <div className={css(grid.container, grid.clearfix)}>
                        <MainMenu onLoaded={this.props.onLoaded}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
