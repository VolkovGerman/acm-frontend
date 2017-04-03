import React from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetRow from '../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../Widgets/WidgetInputComponent/WidgetInput';
import TabsLayout from '../Layouts/TabsLayout/TabsLayout';
import WidgetSwitch from '../Widgets/WidgetSwitchComponent/WidgetSwitch';
import Tab from '../Layouts/TabLayout/TabLayout';
import {hashHistory} from 'react-router';
import config from '../../../core/config/general.config';

class ChampCreate extends React.Component {
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
            ]
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
        let method = this.state.currentId ? 'put' : 'post';
        let link = `${config.server}/champs/${this.state.currentId ? this.state.currentId : ''}`;
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
                year: formItems.year,
                isOpen: formItems.isOpen ? 1 : 0,
                status: formItems.status ? 1 : 0,
            })
        })
            .then(_ => _.json())
            .then(_ => hashHistory.push('/champs'));

        e.preventDefault();
    }

    componentDidMount = () => {
        this.props.updateBlockTitle(this.state.currentId ? 'Изменение чемпионата' : 'Добавление чемпионата');
        this.props.updateLoadedStatus(true, this.state.numberOfComponents);
        if (this.state.currentId) {
            fetch(`${config.server}/champs/${this.state.currentId}`, {
                method: 'get',
            })
                .then(_ => _.json())
                .then(champ => {
                    this.setState({
                        currentItem: champ,
                    });
                    this.props.updateLoadedStatus(true, this.state.numberOfComponents);
                });
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
                        <Block title="Добавить чемпионат" showButtons buttons={this.state.buttons}>
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <WidgetInput name="titleRU" value={this.state.currentItem.titleRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Год проведения" name="year" isRequired>
                                        <WidgetInput name="year" value={this.state.currentItem.year}/>
                                    </WidgetRow>
                                    <WidgetRow title="Открыт" name="isOpen">
                                        <WidgetSwitch name="isOpen" value={this.state.currentItem.isOpen}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="status">
                                        <WidgetSwitch name="status" value={this.state.currentItem.status}/>
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

export default ChampCreate;
