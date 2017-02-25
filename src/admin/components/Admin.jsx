import React, {Component} from 'react';

import MainMenu from './MainMenuComponent/MainMenu';
import LoginMenu from './LoginMenuComponent/LoginMenu';

require('./Admin.scss');

class Admin extends Component {
    constructor(props) {
        super(props);

        this.updateBlockTitle = this.updateBlockTitle.bind(this);
    }

    state = {
        blockTitle: 'Панель управления'
    }

    static onEnter(nextState, replace) {
        // if (true) {
        //     replace('/login');
        // }
    }

    updateBlockTitle(title) {
        this.setState({
            blockTitle: title
        });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                updateBlockTitle: this.updateBlockTitle
            })
        );

        return (
            <div className="Admin">
                <div className="mainWrap">
                    <MainMenu />
                    <div className="main">
                        <div className="main__login">
                            <LoginMenu />
                        </div>
                        <div className="main__content">
                            <div className="main__title">{this.state.blockTitle}</div>
                            <div className="main__blocks">{childrenWithProps}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
