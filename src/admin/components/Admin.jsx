import React, {Component} from 'react';

import MainMenu from './MainMenuComponent/MainMenu';
import LoginMenu from './LoginMenuComponent/LoginMenu';
import Loader from '../../core/components/loaders/CssSquareLoader/CssSquareLoader';

require('./Admin.scss');

class Admin extends Component {
    constructor(props) {
        super(props);

        this.updateBlockTitle = this.updateBlockTitle.bind(this);
        this.updateLoadedStatus = this.updateLoadedStatus.bind(this);
        this.isLoader = this.isLoader.bind(this);
        this.state = {
            blockTitle: 'Панель управления',
            isLoaded: false,
            numberOfLoadedComponents: 0
        };
    }

    static onEnter(nextState, replace) {
        // if (true) {
        //     replace('/login');
        // }
    }

    updateBlockTitle(title) {
        this.setState(_ => ({
            blockTitle: title,
            isLoaded: _.isLoaded,
        }));
    }

    updateLoadedStatus = (isLoaded, numberOfComponents) => {
        console.log(numberOfComponents);
        if (isLoaded) {
            this.setState(_ => ({
                blockTitle: _.blockTitle,
                isLoaded: _.numberOfLoadedComponents + 1 == numberOfComponents,
                numberOfLoadedComponents: _.numberOfLoadedComponents + 1
            }));
        }
    };

    isLoader = () =>
        this.state.isLoaded;

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                updateBlockTitle: this.updateBlockTitle,
                updateLoadedStatus: this.updateLoadedStatus,
                isLoader: this.isLoader
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
                            {!this.state.isLoaded &&
                            <Loader/>
                            }
                            <div className="main__blocks">{childrenWithProps}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
