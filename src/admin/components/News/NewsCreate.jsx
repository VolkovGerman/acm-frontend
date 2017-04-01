import React, {Component} from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetInput from '../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../Widgets/WidgetSwitchComponent/WidgetSwitch';
import WidgetHtmlEditor from '../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetImageEditor from '../Widgets/WidgetImageEditorComponent/WidgetImageEditor';
import WidgetSelect from '../Widgets/WidgetSelectComponent/WidgetSelect';
import WidgetRow from '../Layouts/WidgetRowComponent/WidgetRow';
import WidgetChosen from '../Widgets/WidgetChosen/WidgetChosen';
import TabsLayout from '../Layouts/TabsLayout/TabsLayout';
import Tab from '../Layouts/TabLayout/TabLayout';
import config from '../../../core/config/general.config';
import Transformer from '../../../core/scripts/transformer';
import {hashHistory} from 'react-router';

class NewsCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
            numberOfComponents: this.props.location.query.id ? 3 : 2,
            themes: [],
            allTags: [],
            langs: [],
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ]
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
        let method = this.state.currentId ? 'put' : 'post';
        let link = `${config.server}/news/${this.state.currentId ? this.state.currentId : ''}`;
        fetch(link, {
            method: method,
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
                fetch(`${config.server}/news/${_.id}/bind/topic`, {
                    method: 'post',
                    dataType: 'json',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: formItems.newsTopic
                    })
                })
                    .then(_ => _.json())
                    .then(_ => {
                        hashHistory.push('/news');
                    })
            );

        e.preventDefault();
    }

    componentDidMount() {
        this.props.updateBlockTitle(this.state.currentId ? 'Изменение новости' : 'Добавление новости');
        fetch(`${config.server}/tags`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    allTags: this.parseServerResponse(_, 'tags'),
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });

        fetch(`${config.server}/topics`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    themes: this.parseServerResponse(_, 'topics'),
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });
        if (this.state.currentId) {
            fetch(`${config.server}/news/${this.state.currentId}`, {
                method: 'get',
            })
                .then(_ => _.json())
                .then(news =>
                    fetch(`${config.server}/news/${news.id}/topic`, {
                        method: 'get',
                    })
                        .then(_ => _.json())
                        .then(topic => {
                            news.topic = topic;
                            this.setState({
                                currentItem: news,
                            });
                            this.props.updateLoadedStatus(true, this.state.numberOfComponents);
                        })
                );
        }

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
                        <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Тема" name="newsTopic" isRequired>
                                        <WidgetSelect options={this.state.themes} name="newsTopic" withEmpty
                                                      isRequired
                                                      value={this.state.currentItem.topic ? this.state.currentItem.topic.id : 0}/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="titleRU" isRequired>
                                        <WidgetInput name="titleRU" value={this.state.currentItem.titleRU}/>
                                    </WidgetRow>
                                    {/*<WidgetRow title="Изоображение" name="image" isRequired>*/}
                                        {/*<WidgetImageEditor name="image"/>*/}
                                    {/*</WidgetRow>*/}
                                    <WidgetRow title="Краткое описание" name="descriptionRU">
                                        <WidgetHtmlEditor name="descriptionRU"
                                                          value={this.state.currentItem.descriptionRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentRU">
                                        <WidgetHtmlEditor name="contentRU" value={this.state.currentItem.contentRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Теги" name="news_tags">
                                        <WidgetChosen name="news_tags" allTags={this.state.allTags}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <WidgetSwitch name="statusRU" value={this.state.currentItem.statusRU}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название новости" name="titleEN" isRequired>
                                        <WidgetInput name="titleEN" value={this.state.currentItem.titleEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionEN">
                                        <WidgetHtmlEditor name="descriptionEN"
                                                          value={this.state.currentItem.descriptionEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentEN">
                                        <WidgetHtmlEditor name="contentEN" value={this.state.currentItem.contentEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <WidgetSwitch name="statusEN" value={this.state.currentItem.statusEN}/>
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
