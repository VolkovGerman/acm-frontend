import React, {Component} from 'react'
import {css} from 'aphrodite/no-important';

import styles from './AboutStyles';
import grid from '../../../General/GridStyles';

class About extends Component {
    render() {
        return (
            <div className={css(styles.about, grid.clearfix)}>
                <div className={css(grid.container)}>
                    <div className={css(styles.body)}>
                        <h2 className={css(styles.body__header)}>Белорусский университет N°1</h2>
                        <div className={css(styles.body__content)}>
                            <img src="https://demo.gavick.com/joomla25/university/images/demo/students.jpg" alt=""
                                 className={css(styles.body__image)}/>
                            <div className={css(styles.body__description)}>
                                <p className={css(styles.body__text)}>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book.</p>
                                <p className={css(styles.body__text)}>It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages</p>
                                <a className={css(styles.about__link)} href="">Читать далее...</a>
                            </div>
                            <ul className={css(styles.list)}>
                                <li className={css(styles.list__item)}>
                                    <a className={css(styles.list__link)} href="">Наталья</a>
                                </li>
                                <li className={css(styles.list__item)}>
                                    <a className={css(styles.list__link)} href="">Морская</a>
                                </li>
                                <li className={css(styles.list__item)}>
                                    <a className={css(styles.list__link)} href="">Пехота</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={css(styles.sidebar)}>
                        <div className={css(styles.sidebar__content)}>
                            <h3 className={css(styles.sidebar__header)}>Адмишнс</h3>
                            <div className={css(styles.sidebar__inner)}>
                                <ul className={css(styles.sidebar__list)}>
                                    <li className={css(styles.sidebar__item)}>
                                        <a className={css(styles.sidebar__link)} href="">
                                            <img className={css(styles.sidebar__image)} src="/images/about/list.svg"/>
                                            Список олимпиад
                                        </a>
                                    </li>
                                    <li className={css(styles.sidebar__item)}>
                                        <a className={css(styles.sidebar__link)} href="">
                                            <img className={css(styles.sidebar__image)} src="/images/about/calendar.svg"/>
                                            Ключевые даты
                                        </a>
                                    </li>
                                    <li className={css(styles.sidebar__item)}>
                                        <a className={css(styles.sidebar__link)} href="">
                                            <img className={css(styles.sidebar__image)} src="/images/about/teacher.svg"/>
                                            Преподаватели
                                        </a>
                                    </li>
                                    <li className={css(styles.sidebar__item)}>
                                        <a className={css(styles.sidebar__link)} href="">
                                            <img className={css(styles.sidebar__image)} src="/images/about/winners.svg"/>
                                            Призеры олимпиад
                                        </a>
                                    </li>
                                </ul>
                                <a className={css(styles.about__link)} href="">Читать далее...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
