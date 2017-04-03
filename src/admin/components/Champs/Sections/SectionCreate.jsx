import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetRow from '../../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSelect from '../../Widgets/WidgetSelectComponent/WidgetSelect';
import TabsLayout from '../../Layouts/TabsLayout/TabsLayout';
import Tab from '../../Layouts/TabLayout/TabLayout';
import {hashHistory} from 'react-router';
import config from '../../../../core/config/general.config';

class SectionCreate extends React.Component {
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
        this.saveSection(formItems);

        e.preventDefault();
    }

    componentDidMount = () => {
        this.props.updateBlockTitle(this.state.currentId ? 'Изменение секции чемпионата' : 'Добавление секции чемпионата');
        this.props.updateLoadedStatus(true, this.state.numberOfComponents);
        if (this.state.currentId) {
            this.loadChampSection();
        }
    };


    componentWillUnmount = () => {
        this.props.setLoader();
    };

    saveSection = (formItems) => {
        let method = this.state.currentId ? 'put' : 'post';
        let link = `${config.server}/champSections/${this.state.currentId ? this.state.currentId : ''}`;
        fetch(link, {
            method: method,
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titleRU: formItems.titleRU,
                titleEN: formItems.titleEN
            })
        })
            .then(_ => _.json())
            .then(section => this.bindSectionToChamp(section.id, this.props.params.champId));
    };

    bindSectionToChamp = (champ_section_id, champ_id) => {
        fetch(`${config.server}/champs/${champ_id}/bind/champSection`, {
            method: 'post',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: champ_section_id
            })
        })
            .then(_ => _.json())
            .then(_ => hashHistory.push(`/champs/${this.props.params.champId}/sections`));
    };

    loadChampSection = () => {
        fetch(`${config.server}/champSections/${this.state.currentId}`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(champSection => {
                this.setState({
                    currentItem: champSection,
                });
                this.props.updateLoadedStatus(true, this.state.numberOfComponents);
            });
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
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <WidgetInput name="titleEN" value={this.state.currentItem.titleEN}/>
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

export default SectionCreate;
