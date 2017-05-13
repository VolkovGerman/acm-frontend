import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../../components/layouts/Tabs/Tabs';
import Tab from '../../../components/layouts/Tab/Tab';
import Input from '../../../components/widgets/Input/Input';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class CompetitionSectionCreate extends React.Component {
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
            ? this.props.handlePutCompetitionSection(this.props.params.competition_id, this.state.currentId, parse.parseForm(form))
            : this.props.handlePostCompetitionSection(this.props.params.competition_id, parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение секции чемпионата' : 'Добавление секции чемпионата');
        this.state.currentId
            ? this.props.handleLoadingCurrentCompetitionSection(this.props.params.competition_id, this.state.currentId)
            : this.props.flushCompetitionSection();
    }

    render() {
        return (
            <div className="CreateCompetitionSection">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Добавить секцию чемпионата" showButtons buttons={this.state.buttons}>
                        {!this.props.competitionSections.isLoading
                            ?
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <Input name="titleRU"
                                               value={this.props.competitionSections.data.title ? this.props.competitionSections.data.title.ru : ''}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <Input name="titleEN"
                                               value={this.props.competitionSections.data.title ? this.props.competitionSections.data.title.en : ''}/>
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
