import React from 'react';

import Block from '../../components/layouts/Block/Block';
import WidgetRow from '../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../components/layouts/Tabs/Tabs';
import Tab from '../../components/layouts/Tab/Tab';
import Input from '../../components/widgets/Input/Input';
import Switch from '../../components/widgets/Switch/Switch';
import HtmlEditor from '../../components/widgets/HtmlEditor/HtmlEditor';
import DatePicker from '../../components/widgets/DatePicker/DatePicker';
import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../libs/parse';

export default class EventCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.location.query.id ? this.props.location.query.id : 0,
            buttons: [
                {
                    name: 'Добавить',
                    type: 'submit',
                    style: 'green'
                }
            ]
        }
    }

    handleForm(e) {
        const form = e.currentTarget;
        e.preventDefault();

        this.state.currentId
            ? this.props.handlePutEvent(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostEvent(parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение события' : 'Добавление события');
        this.state.currentId ? this.props.handleLoadingCurrentEvent(this.state.currentId) : this.props.flushEvent();
    }

    render() {
        return (
            <div className="CreateChamps">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Добавить событие" showButtons buttons={this.state.buttons}>
                        {!this.props.events.isLoading
                            ?
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <Input name="titleRU"
                                               value={this.props.events.data.title ? this.props.events.data.title.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Описание" name="descriptionRU">
                                        <HtmlEditor name="descriptionRU"
                                                    value={this.props.events.data.description ? this.props.events.data.description.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Место проведения" name="placeRU">
                                        <Input name="placeRU"
                                               value={this.props.events.data.place ? this.props.events.data.place.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Дата проведения" name="date">
                                        <DatePicker name="date"
                                                    value={this.props.events.data.date ? this.props.events.data.date : undefined}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusRU">
                                        <Switch name="statusRU"
                                                value={this.props.events.data.status ? this.props.events.data.status.ru : ''}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <Input name="titleEN"
                                               value={this.props.events.data.title ? this.props.events.data.title.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Описание" name="descriptionEN">
                                        <HtmlEditor name="descriptionEN"
                                                    value={this.props.events.data.description ? this.props.events.data.description.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Место проведения" name="placeEN">
                                        <Input name="placeEN"
                                               value={this.props.events.data.place ? this.props.events.data.place.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="statusEN">
                                        <Switch name="statusEN"
                                                value={this.props.events.data.status ? this.props.events.data.status.en : ''}/>
                                    </WidgetRow>
                                </Tab>
                            </Tabs>
                            :
                            <Loader/>
                        }
                    </Block>
                </form>
            </div>
        )
    }
}
