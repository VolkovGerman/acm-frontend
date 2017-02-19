import React, {Component} from 'react';

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
            </div>
        )
    }
}

export default MainMenu;
