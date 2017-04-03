import React from 'react';

import Block from '../../../Layouts/BlockComponent/Block';
import WidgetRow from '../../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../../Widgets/WidgetInputComponent/WidgetInput';
import TabsLayout from '../../../Layouts/TabsLayout/TabsLayout';
import Tab from '../../../Layouts/TabLayout/TabLayout';
import {hashHistory} from 'react-router';
import config from '../../../../../core/config/general.config';
import Transformer from '../../../../../core/scripts/transformer';
import WidgetHtmlEditor from '../../../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';

class PageCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
            numberOfComponents: this.props.location.query.id ? 2 : 1,
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ],
            champs: []
        };

        this.handleForm = this.handleForm.bind(this);
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

        this.savePage(formItems);
        e.preventDefault();
    }

    savePage = (formItems) => {
        let method = this.state.currentId ? 'put' : 'post';
        let link = `${config.server}/pages/${this.state.currentId ? this.state.currentId : ''}`;
        fetch(link, {
            method: method,
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titleRU: formItems.titleRU,
                titleEN: formItems.titleEN,
                contentRU: formItems.contentRU,
                contentEN: formItems.contentEN,
                systemName: Transformer.translit(formItems.titleEN || formItems.titleRU)
            })
        })
            .then(_ => _.json())
            .then(page => this.bindPageToChampSection(page.id, this.props.params.sectionId));
    };

    bindPageToChampSection = (pageId, champSectionId) => {
        fetch(`${config.server}/champSections/${champSectionId}/bind/page`, {
            method: 'post',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: pageId
            })
        })
            .then(_ => _.json())
            .then(_ => hashHistory.push(`/champs/${this.props.params.champId}/sections/${champSectionId}/pages`))
    };

    loadPage = () => {
        fetch(`${config.server}/pages/${this.state.currentId}`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(page => {
                this.setState({
                    currentItem: page,
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });
    };

    componentDidMount = () => {
        this.props.updateBlockTitle(this.state.currentId ? 'Изменение страницы секции чемпионата' : 'Добавление страницы секции чемпионата');
        this.props.updateLoadedStatus(true, this.state.numberOfComponents);
        if (this.state.currentId) {
            this.loadPage();
        }
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="ChampCreate">
                    <form onSubmit={this.handleForm}>
                        <Block title="Добавить секцию чемпионата" showButtons buttons={this.state.buttons}>
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <WidgetInput name="titleRU" value={this.state.currentItem.titleRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Контент" name="contentRU">
                                        <WidgetHtmlEditor name="contentRU" value={this.state.currentItem.contentRU}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <WidgetInput name="titleEN" value={this.state.currentItem.titleEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Контент" name="contentEN">
                                        <WidgetHtmlEditor name="contentEN" value={this.state.currentItem.contentEN}/>
                                    </WidgetRow>
                                </Tab>
                            </TabsLayout>
                        </Block>
                    </form>
                </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default PageCreate;
