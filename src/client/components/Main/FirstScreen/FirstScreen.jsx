import React, {Component} from 'react'

import MainMenu from './MainMenu/MainMenu';

require('./FirstScreen.scss');

class FirstScreen extends Component {
    render() {
        return (
            <div className="FirstScreen">
                <div className="bgSlider">
                    <div className="container">
                        <div className="header clearfix">
                            <a className="logo" href="/"></a>
                            <button className="logIn">Log in</button>
                            {/*<MainMenu onLoad={this.props.onLoad}/>*/}
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
                            <div className="videoWrap">
                                <div className="video__play"></div>
                                <img className="video" src="/static/images/backgrounds/bg_video.jpg" alt="video"/>
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
