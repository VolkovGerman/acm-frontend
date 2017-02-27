import React, {Component} from 'react';
import {Link} from 'react-router';

import MainMenu from './MainMenuComponent/MainMenu';

require('./Header.scss');

class FirstScreen extends Component {
    render() {
        return (
            <div className="Header">
                <div className="bgSlider">
                    <div className="container">
                        <div className="header clearfix">
                            <Link className="logo" to="/" />
                            {/* <button className="logIn">Log in</button> */}
                            <MainMenu />
                        </div>
                        <div className="main">
                            <div className="mainTitle">
                                <div className="mainTitle__title"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;
