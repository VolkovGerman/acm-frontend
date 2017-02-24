import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    render() {

        let widgets = (
            <div className="widgets">
                <WidgetInput params={{type: 'text', title: 'Название', name: 'news_title'}}/>
                <WidgetInput params={{type: 'text', title: 'Url страницы', name: 'news_url'}}/>
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
