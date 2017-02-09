import React, {Component} from 'react';
import Menu from '../TopMenuComponent/TopMenu';
import {css} from 'aphrodite/no-important';
import styles from './AboutStyles';

class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className={css(styles.about)}>About</div>
            </div>
        );
    }
}

export default About;
