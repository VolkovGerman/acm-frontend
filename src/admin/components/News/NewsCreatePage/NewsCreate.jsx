import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetHtmlEditor from '../../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetSelect from '../../Widgets/WidgetSelectComponent/WidgetSelect';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            themes: [],
            langs: []
        }
    }

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

    componentDidMount() {
        this.props.updateBlockTitle('Добавление новости');
        this.state.themes = [
            {
                value: 1,
                name: 'Чемпионат'
            },
            {
                value: 2,
                name: 'Университет'
            }
        ];
        this.state.langs = [
            {
                value: 1,
                name: 'Русский'
            },
            {
                value: 2,
                name: 'Английский'
            }
        ];
    }

    render() {
        return (
            <div className="NewsCreate">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Основная информация">
                        <WidgetRow title="Название" name="news_title" isRequired>
                            <WidgetInput name="news_title"/>
                        </WidgetRow>
                        <WidgetRow title="Тема" name="news_theme">
                            <WidgetSelect options={this.state.themes} withEmpty withAdding isRequired/>
                        </WidgetRow>
                        <WidgetRow title="Url страницы" name="news_url" isRequired>
                            <WidgetInput name="ews_url"/>
                        </WidgetRow>
                        <WidgetRow title="Краткое описание" name="news_short_content">
                            <WidgetHtmlEditor/>
                        </WidgetRow>
                        <WidgetRow title="Полное описание" name="news_full_content">
                            <WidgetHtmlEditor/>
                        </WidgetRow>
                        <WidgetRow title="Язык" name="news_lang">
                            <WidgetSelect options={this.state.langs}/>
                        </WidgetRow>
                        <WidgetRow title="Публиковать" name="news_isActive">
                            <WidgetSwitch name="news_isActive"/>
                        </WidgetRow>
                    </Block>
                </form>
            </div>
        )
    }
}

export default NewsCreate;
