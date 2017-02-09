import React, {Component} from 'react';
import Header from '../HeaderComponent/Header';
import {css} from 'aphrodite/no-important';
import styles from './AboutStyles';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className={css(styles.about)}>About</div>
            </div>
        );
    }
}

export default About;
