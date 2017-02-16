import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './MotivationStyles';

class Motivation extends Component {
    render() {
        return (
            <div className={css(styles.motivation)}>
                <div className={css(styles.motivation__item)}>
                    <div className={css(styles.motivation__title)}>
                        Чемпионат БГУИР
                    </div>
                    <div className={css(styles.motivation__description)}>
                        Чемпионат по программированию проводится по правилам ACM и состоит из трех туров.
                    </div>
                </div>
                <div className={css(styles.motivation__item)}>
                    <div className={css(styles.motivation__title)}>
                        Соревнования
                    </div>
                    <div className={css(styles.motivation__description)}>
                        ACM ICPC, TopCoder, Google Code Jam, Imagine Cup позволят проявить свой талант.
                    </div>
                </div>
                <div className={css(styles.motivation__item)}>
                    <div className={css(styles.motivation__title)}>
                        Школа олимпиадника
                    </div>
                    <div className={css(styles.motivation__description)}>
                        «Школа» успешно работает уже несколько лет, с каждым годом становясь все качественнее и
                        масштабнее.
                    </div>
                </div>
            </div>
        );
    }
}

export default Motivation;
