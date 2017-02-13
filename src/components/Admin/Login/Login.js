import React, {Component} from 'react';
import {css} from 'aphrodite/no-important';

import styles from './LoginStyles';

class Login extends Component {
    render() {
        return (
            <div className={css(styles.loginWrap)}>
                <div className={css(styles.login)}>
                    <div className={css(styles.login__title)}>Login</div>
                    <div className={css(styles.login__main)}>
                        <form action="">
                            <div className={css(styles.loginField)}>
                                <input className={css(styles.loginField__input)} type="text" name="loginUsername"
                                       placeholder="Username"/>
                            </div>
                            <div className={css(styles.loginField)}>
                                <input className={css(styles.loginField__input)} type="password" name="loginPassword"
                                       placeholder="Password"/>
                            </div>
                            <div className={css(styles.loginBtnWrap)}>
                                <button className={css(styles.loginBtn, styles.loginBtnWrap)}>Log in</button>
                            </div>
                        </form>
                    </div>
                    <div className={css(styles.feedback)}>
                        <a href="#" className={css(styles.feedback__link)}>Any questions? Contact us!</a>
                    </div>
                    <div className={css(styles.logo)}>
                        <a href="/">
                            <div className={css(styles.logo__img)}></div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
