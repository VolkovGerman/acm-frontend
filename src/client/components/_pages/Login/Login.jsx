import React, {Component} from 'react';

require('./Login.scss');

const pageParams = {
    bsuirLogo: require('../../../../../static/images/logo/bsuir_logo.png')
};

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="loginPage">
                    <div className="loginPage__left">
                        <div className="loginPage__logoWrap">
                            <img src={pageParams.bsuirLogo} className="loginPage__logo" alt="Logo"/>
                        </div>
                    </div>
                    <div className="loginPage__right">
                        <div className="loginForm">
                            <header className="loginForm__header">
                                <div className="loginForm__title">
                                    Login Page
                                </div>
                            </header>
                            <div className="loginFrom__content">
                                <form className="loginForm__form">
                                    <div className="loginForm__field">
                                        <input className="loginForm__input" type="text" name="loginUsername"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="loginForm__field">
                                        <input className="loginForm__input" type="password" name="loginPassword"
                                               placeholder="Password"/>
                                    </div>
                                </form>
                            </div>
                            <footer className="loginForm__footer">
                                <div className="loginForm__actions">
                                    <button className="loginForm__button">Enter</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
