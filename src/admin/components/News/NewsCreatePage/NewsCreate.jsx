import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetHtmlEditor from '../../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetSelect from '../../Widgets/WidgetSelectComponent/WidgetSelect';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetChosen from '../../Widgets/WidgetChosen/WidgetChosen';
import TabsLayout from '../../Layouts/TabsLayout/TabsLayout';
import Tab from '../../Layouts/TabLayout/TabLayout';
import config from '../../../../core/config/general.config';

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

        console.log(formItems);

        // fetch('https://acm-backend.herokuapp.com/news', {
        //     method: 'post',
        //     dataType: 'json',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         title: 'title',
        //         systemName: 'systemName',
        //         content: 'content',
        //         views: 1,
        //         langId: 2,
        //         status: 20
        //     })
        // })
        //     .then(_ => _.json())
        //     .then(_ => console.log(_));

        e.preventDefault();
    }

    componentDidMount() {
        this.props.updateBlockTitle('Добавление новости');
        this.state.langs = [
            {
                id: 1,
                name: 'Русский'
            },
            {
                id: 2,
                name: 'Английский'
            }
        ];
        fetch(`${config.server}/tags`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState(prevState => ({
                    themes: prevState.themes,
                    allTags: this.parseServerResponse(_, 'tags'),
                    langs: prevState.langs
                }));
                this.props.updateLoadedStatus(true, 2);
            });

        fetch(`${config.server}/topics`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                let allTags =
                    this.setState(prevState => ({
                        themes: this.parseServerResponse(_, 'topics'),
                        allTags: prevState.allTags,
                        langs: prevState.langs
                    }));
                this.props.updateLoadedStatus(true, 2);
            });

    }

    parseServerResponse = (responseJson, elementsName) => {
        return responseJson['_embedded'][elementsName].map(_ => {
            if ("id" in _ && "name" in _) {
                return {
                    id: _.id,
                    name: _.name
                }
            }
        });
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="NewsCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация">
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Тема" name="news_theme">
                                        <WidgetSelect options={this.state.themes} name="news_theme" withEmpty withAdding
                                                      isRequired/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="news_title" isRequired>
                                        <WidgetInput name="news_title"/>
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
                                    <WidgetRow title="Публиковать" name="news_isActive">
                                        <WidgetSwitch name="news_isActive"/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Тема" name="news_theme">
                                        <WidgetSelect options={this.state.themes} name="news_theme" withEmpty withAdding
                                                      isRequired/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="news_title" isRequired>
                                        <WidgetInput name="news_title"/>
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
                                    <WidgetRow title="Публиковать" name="news_isActive">
                                        <WidgetSwitch name="news_isActive"/>
                                    </WidgetRow>
                                </Tab>
                            </TabsLayout>

                        </Block>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="Loader"></div>
            );
        }
    }
}

export default NewsCreate;
