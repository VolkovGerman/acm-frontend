import React from 'react';
import {Link} from 'react-router';

import MainMenu from './MainMenu/MainMenu';

import './Header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="bgSlider">
                    <div className="container">
                        <div className="headerMobile clearfix">
                            <Link className="headerMobile__logo" to="/"/>
                            <Link className="headerMobile__menuIco" to="#"/>
                        </div>
                        <div className="header clearfix">
                            <Link className="logo" to="/"/>
                            {/*<button className="logIn">Log in</button>*/}
                            <MainMenu langs={this.props.langs}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
