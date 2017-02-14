import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './FirstScreenStyles';
import grid from '../../../General/GridStyles';
import MainMenu from './MainMenu/MainMenu';

class FirstScreen extends Component {
    render() {
        return (
            <div className={css(styles.bgSlider)}>
                <div className={css(grid.container)}>
                    <div className={css(styles.header)}>
                        <a className={css(styles.logo)} href="/"></a>
                        <button className={css(styles.logIn)}>Log in</button>
                        <MainMenu onLoad={this.props.onLoad} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;