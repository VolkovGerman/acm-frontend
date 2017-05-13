import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../../components/layouts/Tabs/Tabs';
import Tab from '../../../components/layouts/Tab/Tab';
import Input from '../../../components/widgets/Input/Input';
import Switch from '../../../components/widgets/Switch/Switch';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class CompetitionCreate extends React.Component {
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
            ? this.props.handlePutCompetition(this.state.currentId, parse.parseForm(form))
            : this.props.handlePostCompetition(parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение чемпионата' : 'Добавление чемпионата');
        this.state.currentId ? this.props.handleLoadingCurrentCompetition(this.state.currentId) : this.props.flushCompetition();
    }

    render() {
        return (
            <div className="CreateCompetition">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Добавить чемпионат" showButtons buttons={this.state.buttons}>
                        {!this.props.competitions.isLoading
                            ?
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <Input name="titleRU"
                                               value={this.props.competitions.data.title ? this.props.competitions.data.title.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Год проведения" name="year" isRequired>
                                        <Input name="year"
                                               value={this.props.competitions.data.year ? this.props.competitions.data.year : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Открыт" name="isOpen">
                                        <Switch name="isOpen"
                                                value={this.props.competitions.data.isOpen ? this.props.competitions.data.isOpen : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Публиковать" name="status">
                                        <Switch name="status"
                                                value={this.props.competitions.data.status ? this.props.competitions.data.status.ru : ''}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <Input name="titleEN"
                                               value={this.props.competitions.data.title ? this.props.competitions.data.title.en : ''}/>
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
