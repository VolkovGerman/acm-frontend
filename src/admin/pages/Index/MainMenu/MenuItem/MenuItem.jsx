import React from 'react';

import MenuSubItem from './MenuSubItem/MenuSubItem';

import './MenuItem.scss';

export default class MenuItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }

    toggleSubMenu(e) {
        e.preventDefault();

        this.setState(_ => ({
            isOpen: !_.isOpen
        }));
    }

    render() {
        return (
            <div className="MenuItem">
                <div className="menuItem">
                    <a className={this.state.isOpen ? 'menuItem__link menuItem__link_active' : 'menuItem__link'}
                       href="#"
                       onClick={_ => this.toggleSubMenu(_)}>
                        {this.props.menu.title}
                        <div className="menuItem__icon"></div>
                    </a>
                    {this.state.isOpen === true &&
                    <div className="menuItem__submenu" href="#">
                        {this.props.menu.items.map((item, index) =>
                            <MenuSubItem key={index} subMenu={item}/>
                        )}
                    </div>
                    }
                </div>
            </div>
        )
    }
}
