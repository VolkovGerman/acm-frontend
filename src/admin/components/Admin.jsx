import React, {Component} from 'react';

import MainMenu from './MainMenuComponent/MainMenu';
import LoginMenu from './LoginMenuComponent/LoginMenu';

require('./Admin.scss');

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentBlockTitle: 'Добавление новости'
        }
    }

    static onEnter(nextState, replace) {
        // if (true) {
        //     replace('/login');
        // }
    }

    render() {
        return (
            <div className="Admin">
                <div className="mainWrap">
                    <MainMenu />
                    <div className="main">
                        <div className="main__login">
                            <LoginMenu />
                        </div>
                        <div className="main__content">
                            <div className="main__title">{this.state.contentBlockTitle}</div>
                            <div className="main__blocks">{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
