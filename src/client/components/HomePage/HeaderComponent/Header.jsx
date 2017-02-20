import React, {Component} from 'react'

import MainMenu from './MainMenuComponent/MainMenu';

require('./Header.scss');

class FirstScreen extends Component {
    render() {
        let images = {
            welcome_video: require('../../../../../static/images/backgrounds/bg_video.jpg')
        };
        return (
            <div className="FirstScreen">
                <div className="bgSlider">
                    <div className="container">
                        <div className="header clearfix">
                            <a className="logo" href="/"></a>
                            <button className="logIn">Log in</button>
                            <MainMenu />
                        </div>
                        <div className="main">
                            <div className="mainTitle">
                                <div className="mainTitle__title">Международная студенческая олимпиада по
                                    программированию
                                </div>
                                <div className="mainTitle__description">ACM - крупнейшая студенческая командная
                                    олимпиада по программированию.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <div className="motivationWrap">
                                {/*<Motivation />*/}
                            </div>
                            {/*<Events />*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstScreen;
