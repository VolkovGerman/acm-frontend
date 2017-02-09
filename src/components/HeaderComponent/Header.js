import React, {Component} from 'react';
import Menu from '../TopMenuComponent/TopMenu';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Menu />
            </div>
        );
    }
}

export default Header;
