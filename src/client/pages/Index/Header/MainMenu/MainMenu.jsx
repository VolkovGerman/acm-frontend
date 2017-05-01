import React from 'react';
import {Link} from 'react-router';

import './MainMenu.scss';
import dictionary from './MainMenu.words';

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [
                {
                    link: '/',
                    name: dictionary.main
                },
                {
                    link: '/competitions',
                    name: dictionary.champBsuir
                }
            ]
        }
    };

    render() {
        const lang = this.props.langs.data;

        return (
            <div className="MainMenu">
                <ul className="mainMenu clearfix">
                    {this.state.menu.map((item, index) =>
                        <li className="mainMenu__item" key={index}>
                            <Link className="mainMenu__link" to={item.link}>{item.name[lang]}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
