import React, {Component} from 'react';

import menuConfig from '../../config/menu.config';
import MenuItem from './MenuItemComponent/MenuItem';

require('./MainMenu.scss');

class MainMenu extends Component {
    render() {
        return (
            <div className="MainMenu">
                <div className="logo">
                    <div className="logo__img"/>
                    <div className="logo__title">ACM BSUIR</div>
                </div>
                <div className="profile">
                    <div className="profile__img"/>
                    <div className="profile__nameWrap">
                        <div className="profile__rang">Администратор</div>
                        <div className="profile__name">Павел Дуров</div>
                    </div>
                </div>
                <div className="menu">
                    {menuConfig.ru.map((item, index) =>
                        <MenuItem key={index} menu={item}/>
                    )}
                </div>
            </div>
        )
    }
}

export default MainMenu;
