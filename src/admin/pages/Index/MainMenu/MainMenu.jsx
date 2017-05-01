import React from 'react';

import menuConfig from './menu.config';
import MenuItem from './MenuItem/MenuItem';

import './MainMenu.scss';

export default (props) =>
    <div className={`MainMenu ${props.interfaces.activeMenu ? 'active' : 'inactive'}`}>
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
