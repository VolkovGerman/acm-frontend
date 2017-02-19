import React, {Component} from 'react';

require('./Login.scss');

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="loginWrap">
                    <div className="login">
                        <div className="login__title">Login</div>
                        <div className="login__main">
                            <form action="">
                                <div className="loginField">
                                    <input className="loginField__input" type="text" name="loginUsername"
                                           placeholder="Username"/>
                                </div>
                                <div className="loginField">
                                    <input className="loginField__input" type="password" name="loginPassword"
                                           placeholder="Password"/>
                                </div>
                                <div className="loginBtnWrap">
                                    <button className="loginBtn loginBtnWrap">Log in</button>
                                </div>
                            </form>
                        </div>
                        <div className="feedback">
                            <a href="#" className="feedback__link">Any questions? Contact us!</a>
                        </div>
                        <div className="logo">
                            <a href="/">
                                <div className="logo__img"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
