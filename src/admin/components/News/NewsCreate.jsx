import React, {Component} from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetInput from '../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetHtmlEditor from '../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetSelect from '../Widgets/WidgetSelectComponent/WidgetSelect';
import WidgetRow from '../Layouts/WidgetRowComponent/WidgetRow';
import WidgetChosen from '../Widgets/WidgetChosen/WidgetChosen';
import TabsLayout from '../Layouts/TabsLayout/TabsLayout';
import Tab from '../Layouts/TabLayout/TabLayout';
import config from '../../../core/config/general.config';
import Transformer from '../../../core/scripts/tranformator';

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
        fetch(`${config.server}/news`, {
            method: 'post',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titleRU: formItems.titleRU,
                systemName: Transformer.translit(formItems.titleEN || formItems.titleRU),
                contentRU: formItems.contentRU,
                descriptionRU: formItems.descriptionRU,
                statusRU: formItems.statusRU ? 1 : 0,
                titleEN: formItems.titleEN,
                contentEN: formItems.contentEN,
                descriptionEN: formItems.descriptionEN,
                statusEN: formItems.statusEN ? 1 : 0,
            })
        })
            .then(_ => _.json())
            .then(_ =>
                fetch(`${config.server}/news/${_.id}/topic`, {
                    method: 'post',
                    dataType: 'json',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        topic_id: formItems.newsTopic
                    })
                })
            );

        e.preventDefault();
    }

    componentDidMount() {
        this.props.updateBlockTitle('Добавление новости');
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
            if ("id" in _ && ("name" in _ || "nameRU" in _)) {
                return {
                    id: _.id,
                    name: _.name ? _.name : _.nameRU
                }
            }
        });
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="NewsCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация">
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Тема" name="newsTopic">
                                        <WidgetSelect options={this.state.themes} name="newsTopic" withEmpty
                                                      isRequired/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="titleRU" isRequired>
                                        <WidgetInput name="titleRU"/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionRU">
                                        <WidgetHtmlEditor name="descriptionRU"/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentRU">
                                        <WidgetHtmlEditor name="contentRU"/>
                                    </WidgetRow>
                                    <WidgetRow title="Теги" name="news_tags">
                                        <WidgetChosen name="news_tags" allTags={this.state.allTags}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <WidgetSwitch name="statusRU"/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название новости" name="titleEN" isRequired>
                                        <WidgetInput name="titleEN"/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionEN">
                                        <WidgetHtmlEditor name="descriptionEN"/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentEN">
                                        <WidgetHtmlEditor name="contentEN"/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <WidgetSwitch name="statusEN"/>
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
