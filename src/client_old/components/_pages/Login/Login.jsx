import React, {Component} from 'react';

require('./Login.scss');

const pageParams = {
    bsuirLogo: require('../../../../../static/images/logo/bsuir_logo.png')
};

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    usernameChanged = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    passwordChanged = (e) => {
        this.setState({
            password: e.target.value
        })
    };

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
                                        <input className="loginForm__input" type="text" value={this.state.username}
                                               onChange={this.usernameChanged} name="loginUsername"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="loginForm__field">
                                        <input className="loginForm__input" type="password" value={this.state.password}
                                               onChange={this.passwordChanged} name="loginPassword"
                                               placeholder="Password"/>
                                    </div>
                                </form>
                            </div>
                            <footer className="loginForm__footer">
                                <div className="loginForm__actions">
                                    <button className="loginForm__button">
                                        <a href={'/api/login?username=' + this.state.username + '&password=' + this.state.password}>Enter</a>
                                    </button>
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
