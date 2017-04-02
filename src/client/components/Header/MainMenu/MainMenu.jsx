import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router';

require('./MainMenu.scss');

class MainMenu extends Component {
    render() {
        return (
            <div className="MainMenu">
                <ul className="mainMenu clearfix">
                    {this.props.lang.menu.map((item, index) =>
                        <li className="mainMenu__item" key={index}>
                            <Link className="mainMenu__link" to={item.href}>{item.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(MainMenu);
