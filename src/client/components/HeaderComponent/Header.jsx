import React, {Component} from 'react';
import {Link} from 'react-router';

import MainMenu from './MainMenuComponent/MainMenu';

require('./Header.scss');

class FirstScreen extends Component {
    render() {
        let images = {
            welcome_video: require('../../../../static/images/backgrounds/bg_video.jpg')
        };
        return (
            <div className="Header">
                <div className="bgSlider">
                    <div className="container">
                        <div className="header clearfix">
                            <Link className="logo" to="/"></Link>
                            <button className="logIn">Log in</button>
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
