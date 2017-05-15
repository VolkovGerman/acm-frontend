import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetRow from '../../../components/layouts/WidgetRow/WidgetRow';
import Tabs from '../../../components/layouts/Tabs/Tabs';
import Tab from '../../../components/layouts/Tab/Tab';
import Input from '../../../components/widgets/Input/Input';
import HtmlEditor from '../../../components/widgets/HtmlEditor/HtmlEditor';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import parse from '../../../libs/parse';

export default class CompetitionPageCreate extends React.Component {
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
            ? this.props.handlePutCompetitionPage(this.props.params.competition_id, this.props.params.section_id,this.state.currentId, parse.parseForm(form))
            : this.props.handlePostCompetitionPage(this.props.params.competition_id, this.props.params.section_id, parse.parseForm(form));
    }

    componentWillMount() {
        this.props.setPageTitle(this.state.currentId ? 'Изменение страницы чемпионата' : 'Добавление страницы чемпионата');
        this.state.currentId
            ? this.props.handleLoadingCurrentCompetitionPage(this.props.params.competition_id, this.props.params.section_id, this.state.currentId)
            : this.props.flushCompetitionPage();
    }

    render() {
        return (
            <div className="CreateCompetitionPage">
                <form onSubmit={_ => this.handleForm(_)}>
                    <Block title="Добавить страницу чемпионата" showButtons buttons={this.state.buttons}>
                        {!this.props.competitionPages.isLoading
                            ?
                            <Tabs>
                                <Tab name="Русский" id="1">
                                    <WidgetRow title="Название" name="titleRU" isRequired>
                                        <Input name="titleRU"
                                               value={this.props.competitionPages.data.title ? this.props.competitionPages.data.title.ru : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentRU">
                                        <HtmlEditor name="contentRU"
                                                    value={this.props.competitionPages.data.content ? this.props.competitionPages.data.content.ru : ''}/>
                                    </WidgetRow>
                                </Tab>
                                <Tab name="Английский" id="2">
                                    <WidgetRow title="Название" name="titleEN" isRequired>
                                        <Input name="titleEN"
                                               value={this.props.competitionPages.data.title ? this.props.competitionPages.data.title.en : ''}/>
                                    </WidgetRow>
                                    <WidgetRow title="Полное описание" name="contentEN">
                                        <HtmlEditor name="contentEN"
                                                    value={this.props.competitionPages.data.content ? this.props.competitionPages.data.content.en : ''}/>
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
