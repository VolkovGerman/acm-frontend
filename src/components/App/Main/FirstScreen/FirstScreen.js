import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './FirstScreenStyles';
import grid from '../../../General/GridStyles';
import MainMenu from './MainMenu/MainMenu';
import Motivation from './Motivation/Motivation';
import Events from './Events/Events';

class FirstScreen extends Component {
    render() {
        return (
            <div className={css(styles.bgSlider)}>
                <div className={css(grid.container)}>
                    <div className={css(styles.header, grid.clearfix)}>
                        <a className={css(styles.logo)} href="/"></a>
                        <button className={css(styles.logIn)}>Log in</button>
                        <MainMenu onLoad={this.props.onLoad}/>
                    </div>
                    <div className={css(styles.main)}>
                        <div className={css(styles.mainTitle)}>
                            <div className={css(styles.mainTitle__title)}>Международная студенческая олимпиада по
                                программированию
                            </div>
                            <div className={css(styles.mainTitle__description)}>ACM - крупнейшая студенческая командная
                                олимпиада по программированию.
                            </div>
                        </div>
                    </div>
                    <div className={css(styles.footer)}>
                        <div className={css(styles.motivationWrap)}>
                            <Motivation />
                        </div>
                        <div className={css(styles.videoWrap)}>
                            <div className={css(styles.video__play)}></div>
                            <img className={css(styles.video)} src="/images/bg_video.jpg"/>
                        </div>
                        <Events />
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;
