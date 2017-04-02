import React, {Component} from 'react';
import {Link} from 'react-router';

import MainMenu from './MainMenu/MainMenu';

require('./Header.scss');

class FirstScreen extends Component {
    render() {
        return (
            <div className="Header">
                <div className="bgSlider">
                    <div className="container">
                        <div className="headerMobile clearfix">
                            <Link className="headerMobile__logo" to="/" />
                            <Link className="headerMobile__menuIco" to="#" />
                        </div>
                        <div className="header clearfix">
                            <Link className="logo" to="/" />
                             {/*<button className="logIn">Log in</button>*/}
                            <MainMenu />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;
