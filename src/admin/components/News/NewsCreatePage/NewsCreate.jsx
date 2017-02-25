import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    render() {

        let widgets = (
            <div className="widgets">
                <WidgetRow params={{
                    title: 'Название',
                    name: 'news_title',
                    widget: <WidgetInput params={{type: 'text', name: 'news_title'}}/>
                }}/>
                <WidgetRow params={{
                    title: 'Url страницы',
                    name: 'news_url',
                    widget: <WidgetInput params={{type: 'text', name: 'news_url'}}/>
                }}/>
                <WidgetRow params={{
                    title: 'Публиковать',
                    name: 'news_isActive',
                    widget: <WidgetSwitch params={{name: 'news_isAactive'}}/>
                }}/>
            </div>
        );

        return (
            <div className="NewsCreate">
                <Block block={{title: 'Основная информация', widgets: widgets}}/>
            </div>
        )
    }
}

export default NewsCreate;
