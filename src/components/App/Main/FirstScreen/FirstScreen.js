import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './FirstScreenStyles';
import MainMenu from './MainMenu/MainMenu';

class FirstScreen extends Component {
    render() {
        return (
            <div className={css(styles.bgSlider)}>

                <MainMenu />
            </div>

        );
    }
}

export default FirstScreen;