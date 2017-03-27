import React from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetRow from '../Layouts/WidgetRowComponent/WidgetRow';
import WidgetInput from '../Widgets/WidgetInputComponent/WidgetInput';
import WidgetHtmlEditor from '../Widgets/WidgetHtmlEditorComponent/WidgetHtmlEditor';
import WidgetDatePicker from '../Widgets/WidgetDatePicker/WidgetDatePicker';
import TabsLayout from '../Layouts/TabsLayout/TabsLayout';
import WidgetSwitch from '../Widgets/WidgetSwitchComponent/WidgetSwitch';
import Tab from '../Layouts/TabLayout/TabLayout';
import {hashHistory} from 'react-router';
import config from '../../../core/config/general.config';

class EventCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            currentItem: {},
            numberOfComponents: this.props.location.query.id ? 2 : 1,
        }
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
        let link = `${config.server}/events/${this.state.currentId ? this.state.currentId : ''}`;
        fetch(link, {
            method: method,
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titleRU: formItems.titleRU,
                descriptionRU: formItems.descriptionRU,
                placeRU: formItems.placeRU,
                statusRU: formItems.statusRU ? 1 : 0,
                titleEN: formItems.titleEN,
                descriptionEN: formItems.descriptionEN,
                placeEN: formItems.placeEN,
                statusEN: formItems.statusEN ? 1 : 0,
                date: formItems.date
            })
        })
            .then(_ => _.json())
            .then(_ => hashHistory.push('/events'));

        e.preventDefault();
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Добавить событие');
        this.props.updateLoadedStatus(true, this.state.numberOfComponents);
        if (this.state.currentId) {
            fetch(`${config.server}/events/${this.state.currentId}`, {
                method: 'get',
            })
                .then(_ => _.json())
                .then(event => {
                    this.setState({
                        currentItem: event,
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
                <div className="CreateChamps">
                    <form onSubmit={_ => this.handleForm(_)}>
                        <Block title="Добавить событие">
                            <TabsLayout>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <WidgetInput name="titleRU" value={this.state.currentItem.titleRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Описание" name="descriptionRU">
                                        <WidgetHtmlEditor name="descriptionRU" value={this.state.currentItem.descriptionRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Место проведения" name="placeRU">
                                        <WidgetInput name="placeRU" value={this.state.currentItem.placeRU}/>
                                    </WidgetRow>
                                    <WidgetRow title="Дата проведения" name="date">
                                        <WidgetDatePicker name="date" value={this.state.currentItem.date}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <WidgetSwitch name="statusRU" value={this.state.currentItem.statusRU}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <WidgetInput name="titleEN" value={this.state.currentItem.titleEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Описание" name="descriptionEN">
                                        <WidgetHtmlEditor name="descriptionEN" value={this.state.currentItem.descriptionEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Место проведения" name="placeEN">
                                        <WidgetInput name="placeEN" value={this.state.currentItem.placeEN}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <WidgetSwitch name="statusEN" value={this.state.currentItem.statusEN}/>
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

export default EventCreate;
