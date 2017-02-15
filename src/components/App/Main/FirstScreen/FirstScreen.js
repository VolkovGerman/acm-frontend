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
                    <div className={css(grid.clearfix)}></div>
                    <div className={css(styles.main)}>
                        <div className={css(styles.main__title)}>Международная студенческая олимпиада по программированию</div>
                        <div className={css(styles.main__description)}>ACM - крупнейшая студенческая командная олимпиада по программированию.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;