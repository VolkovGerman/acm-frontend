import React from 'react';
import {hashHistory} from 'react-router';

import Block from '../../components/layouts/Block/Block';
import WidgetRow from '../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../components/layouts/Tabs/Tabs';
import Tab from '../../components/layouts/Tab/Tab';
import Input from '../../components/widgets/Input/Input';
import Switch from '../../components/widgets/Switch/Switch';
import HtmlEditor from '../../components/widgets/HtmlEditor/HtmlEditor';
import Select from '../../components/widgets/Select/Select';
import Chosen from '../../components/widgets/Chosen/Chosen';
import config from '../../../core/config/general.config';
import Transformer from '../../../core/scripts/transformer';

export default class NewsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
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

    // componentDidMount() {
    //     this.props.updateBlockTitle(this.state.currentId ? 'Изменение новости' : 'Добавление новости');
    //     fetch(`${config.server}/tags`, {
    //         method: 'get',
    //     })
    //         .then(_ => _.json())
    //         .then(_ => {
    //             this.setState({
    //                 allTags: this.parseServerResponse(_, 'tags'),
    //             });
    //             this.props.updateLoadedStatus(true, this.state.numberOfComponents);
    //         });
    //
    //     fetch(`${config.server}/topics`, {
    //         method: 'get',
    //     })
    //         .then(_ => _.json())
    //         .then(_ => {
    //             this.setState({
    //                 themes: this.parseServerResponse(_, 'topics'),
    //             });
    //             this.props.updateLoadedStatus(true, this.state.numberOfComponents);
    //         });
    //     if (this.state.currentId) {
    //         fetch(`${config.server}/news/${this.state.currentId}`, {
    //             method: 'get',
    //         })
    //             .then(_ => _.json())
    //             .then(news =>
    //                 fetch(`${config.server}/news/${news.id}/topic`, {
    //                     method: 'get',
    //                 })
    //                     .then(_ => _.json())
    //                     .then(topic => {
    //                         news.topic = topic;
    //                         this.setState({
    //                             currentItem: news,
    //                         });
    //                         this.props.updateLoadedStatus(true, this.state.numberOfComponents);
    //                     })
    //             );
    //     }
    //
    // }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение новости' : 'Добавление новости');
        !this.props.news.tableData.length ? this.props.handleLoadingNews() : null;
    }

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="NewsCreate">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Основная информация" showButtons buttons={this.state.buttons}>
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Тема" name="newsTopic" isRequired>
                                        <Select options={this.state.themes} name="newsTopic" withEmpty
                                                      isRequired
                                                      value={this.state.currentItem.topic ? this.state.currentItem.topic.id : 0}/>
                                    </WidgetRow>
                                    <WidgetRow title="Название новости" name="titleRU" isRequired>
                                        <Input name="titleRU" value={this.state.currentItem.titleRU}/>
                                    </WidgetRow>
                                    {/*<WidgetRow title="Изоображение" name="image" isRequired>*/}
                                        {/*<WidgetImageEditor name="image"/>*/}
                                    {/*</WidgetRow>*/}
                                    <WidgetRow title="Краткое описание" name="descriptionRU">
                                        <HtmlEditor name="descriptionRU"
                                                          value={this.state.currentItem.descriptionRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentRU">
                                        <HtmlEditor name="contentRU" value={this.state.currentItem.contentRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Теги" name="news_tags">
                                        <Chosen name="news_tags" allTags={this.state.allTags}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <Switch name="statusRU" value={this.state.currentItem.statusRU}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название новости" name="titleEN" isRequired>
                                        <Input name="titleEN" value={this.state.currentItem.titleEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Краткое описание" name="descriptionEN">
                                        <HtmlEditor name="descriptionEN"
                                                          value={this.state.currentItem.descriptionEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentEN">
                                        <HtmlEditor name="contentEN" value={this.state.currentItem.contentEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <Switch name="statusEN" value={this.state.currentItem.statusEN}/>
                                    </WidgetRow>
                                </Tab>
                            </Tabs>
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
