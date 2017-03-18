import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetHtmlEditor from '../../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetSelect from '../../Widgets/WidgetSelectComponent/WidgetSelect';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetChosen from '../../Widgets/WidgetChosen/WidgetChosen';

require('./NewsCreate.scss');

class NewsCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            themes: [],
            allTags: [],
            langs: []
        };
    }

    handleForm(e) {
        let formItems = {};
        for (let i = 0; i < e.currentTarget.elements.length; i++) {
            if (e.currentTarget.elements[i].name) {
                formItems[e.currentTarget.elements[i].name] = e.currentTarget.elements[i].value !== 'on'
                    ? e.currentTarget.elements[i].value
                    : e.currentTarget.elements[i].checked;
            }
        }

        fetch('https://acm-backend.herokuapp.com/news', {
            method: 'post',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'title',
                systemName: 'systemName',
                content: 'content',
                views: 1,
                langId: 2,
                status: 20
            })
        })
            .then(_ => _.json())
            .then(_ => console.log(_));

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
        fetch('https://acm-backend.herokuapp.com/tags', {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                let allTags = _._embedded.tags.map(tag => {
                    if ("name" in tag) {
                        return {
                            id: 0,
                            name: tag.name
                        }
                    }
                });
                this.setState(prevState => ({
                    themes: prevState.themes,
                    allTags: allTags,
                    langs: prevState.langs
                }))
            });
    }

    render = () => {
        if(this.state.allTags.length) {
            return (
                <div className="NewsCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация">
                            <WidgetRow title="Тема" name="news_theme">
                                <WidgetSelect options={this.state.themes} name="news_theme" withEmpty withAdding
                                              isRequired/>
                            </WidgetRow>
                            <WidgetRow title="Url страницы" name="news_url" isRequired>
                                <WidgetInput name="news_url"/>
                            </WidgetRow>
                            <WidgetRow title="Краткое описание" name="news_short_content">
                                <WidgetHtmlEditor name="news_short_content"/>
                            </WidgetRow>
                            <WidgetRow title="Полное описание" name="news_full_content">
                                <WidgetHtmlEditor name="news_full_content"/>
                            </WidgetRow>
                            <WidgetRow title="Теги" name="news_tags">
                                <WidgetChosen name="news_tags" allTags={this.state.allTags}/>
                            </WidgetRow>
                            <WidgetRow title="Язык" name="news_lang">
                                <WidgetSelect options={this.state.langs} name="news_lang"/>
                            </WidgetRow>
                            <WidgetRow title="Публиковать" name="news_isActive">
                                <WidgetSwitch name="news_isActive"/>
                            </WidgetRow>
                        </Block>
                    </form>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default NewsCreate;
