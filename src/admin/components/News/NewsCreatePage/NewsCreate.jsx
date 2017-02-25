import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    handleForm(e) {
        let formItems = [];
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            if (e.currentTarget.elements[i].name) {
                formItems.push({
                    name: e.currentTarget.elements[i].name,
                    value: e.currentTarget.elements[i].value !== 'on'
                        ? e.currentTarget.elements[i].value
                        : e.currentTarget.elements[i].checked
                })
            }
        }
        console.log(formItems);
        e.preventDefault();
    }

    componentWillMount() {
        this.props.updateBlockTitle('Добавление новости');
    }

    render() {

        let widgets = (
            <div className="widgets">
                <WidgetRow title={'Название'} name={'news_title'} isRequired={true}
                           widget={<WidgetInput name={'news_title'}/>}/>
                <WidgetRow title={'Url страницы'} name={'news_url'} isRequired={true}
                           widget={<WidgetInput name={'news_url'}/>}/>
                <WidgetRow title={'Публиковать'} name={'news_isActive'}
                           widget={<WidgetSwitch name={'news_isActive'}/>}/>
            </div>
        );

        return (
            <div className="NewsCreate">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block block={{title: 'Основная информация', widgets: widgets}}/>
                </form>
            </div>
        )
    }
}

export default NewsCreate;
