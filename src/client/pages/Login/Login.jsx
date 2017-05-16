import React from 'react';
import parseForm from '../../../core/lib/parseForm';
import Cookies from 'universal-cookie';

import config from '../../../core/config/general.config';

import './Login.scss';

const bsuirLogo = require('../../../../static/images/logo/bsuir_logo.png')

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            wrongCredentials: false
        };
    }

    onFormSubmit(e) {

        // REFACTOR THIS TO REDUX ?
        fetch(`${config.server}/api/login`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parseForm(e.currentTarget))
        })
            .then(_ => _.json())
            .then(data => {
                if (data.status === 'success') {
                    this.setState(_ => ({
                        wrongCredentials: false
                    }));

                    new Cookies().set('access_token', data.access_token, { path: '/' });
                    new Cookies().set('user', data.user, { path: '/' });

                    window.location.href = '/dashboard';
                } else {
                    this.setState(_ => ({
                        wrongCredentials: true
                    }));
                }
            });

        e.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <div className="loginPage">
                    <div className="loginPage__left">
                        <div className="loginPage__logoWrap">
                            <img src={bsuirLogo} className="loginPage__logo" alt="Logo"/>
                        </div>
                    </div>
                    <div className="loginPage__right">
                        <form className="loginForm" onSubmit={this.onFormSubmit.bind(this)}>
                            <header className="loginForm__header">
                                <div className="loginForm__title">
                                    Login Page
                                </div>
                            </header>
                            <div className="loginFrom__content">
                                <div className="loginForm__form">
                                    <div className="loginForm__field">
                                        <input className="loginForm__input" type="text" name="username" placeholder="Username"/>
                                    </div>
                                    <div className="loginForm__field">
                                        <input className="loginForm__input" type="password" name="password" placeholder="Password"/>
                                    </div>
                                </div>
                                {this.state.wrongCredentials 
                                    ? <div className="loginForm__error-message">Wrong credentials...</div> : null}
                            </div>
                            <footer className="loginForm__footer">
                                <div className="loginForm__actions">
                                    <button className="loginForm__button" type="submit">
                                        Enter
                                    </button>
                                </div>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
