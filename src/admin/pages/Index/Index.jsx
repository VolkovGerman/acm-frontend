import React from 'react';

import LoginMenu from './LoginMenu/LoginMenu';
import MainMenu from './MainMenu/MainMenu';

import './Index.scss';

export default (props) =>
    <div className="Index">
        <div className="mainWrap">
            <MainMenu {...props} />
            <div className={`main ${props.interfaces.activeMenu ? 'active' : 'inactive'}`}>
                <div className="main__login">
                    <LoginMenu {...props} />
                </div>
                <div className="main__content">
                    <div className="main__title">{props.interfaces.pageTitle}</div>
                    <div className="main__blocks">{props.children}</div>
                </div>
            </div>
        </div>
    </div>
