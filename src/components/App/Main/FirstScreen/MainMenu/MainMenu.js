import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './MainMenuStyles';

class MainMenu extends Component {
    render() {
        return (
            <div>
                <ul className={css(styles.mainMenu)}>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                    <li>Item 1</li>
                </ul>
            </div>

        );
    }
}

export default MainMenu;