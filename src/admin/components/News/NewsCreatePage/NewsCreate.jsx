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
                <WidgetRow title={'Название'} name={'news_title'}
                           widget={<WidgetInput name={'news_title'}/>}/>
                <WidgetRow title={'Url страницы'} name={'news_url'}
                           widget={<WidgetInput name={'news_url'}/>}/>
                <WidgetRow title={'Публиковать'} name={'news_isActive'}
                           widget={<WidgetSwitch name={'news_isActive'}/>}/>
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
