import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';

import styles from './EventsStyles';
import grid from '../../../../General/GridStyles';

class Events extends Component {
    render() {
        return (
            <div className={css(styles.events)}>
                <div className={css(styles.events__title)}>Последние события</div>
                <div className={css(styles.eventsWrap)}>
                    <div className={css(grid.clearfix)}>
                        <div className={css(styles.event)}>
                          <div className={css(styles.dateBox)}>
                              <div className={css(styles.dateBox__day)}>Суб</div>
                              <div className={css(styles.dateBox__month)}>Фев 15</div>
                          </div>
                        </div>
                        <div className={css(styles.event)}>
                            <div className={css(styles.dateBox)}>
                                <div className={css(styles.dateBox__day)}>Суб</div>
                                <div className={css(styles.dateBox__month)}>Фев 15</div>
                            </div>
                        </div>
                    </div>
                    <div className={css(grid.clearfix)}>
                        <div className={css(styles.event)}>
                          <div className={css(styles.dateBox)}>
                              <div className={css(styles.dateBox__day)}>Суб</div>
                              <div className={css(styles.dateBox__month)}>Фев 15</div>
                          </div>
                        </div>
                        <div className={css(styles.event)}>
                            <div className={css(styles.dateBox)}>
                                <div className={css(styles.dateBox__day)}>Суб</div>
                                <div className={css(styles.dateBox__month)}>Фев 15</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
