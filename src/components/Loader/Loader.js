import React, {Component} from 'react';

import {css} from 'aphrodite/no-important';

import styles from './LoaderStyles';

export default class Loader extends Component {
    render() {
        return (
            <div className={css(styles.loaderWrap)}/>
        );
    }
}
