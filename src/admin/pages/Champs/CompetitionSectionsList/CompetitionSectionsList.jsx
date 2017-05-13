import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class CompetitionSectionsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: `/competitions/${props.params.competition_id}/sections/create`,
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + `/competitions/${props.params.competition_id}/sections/delete`
                }
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список секций чемпионата');
        !this.props.competitionSections.tableData.length ? this.props.handleLoadingCompetitionSections(this.props.params.competition_id) : null;
    }

    render() {
        return (
            <div className="CompetitionSectionsList">
                <Block title="Список секций чемпионата" showButtons buttons={this.state.block.buttons}>
                    {!this.props.competitionSections.isLoading && this.props.competitionSections.tableFields.length
                        ? <WidgetTable rows={this.props.competitionSections.tableData} delete={this.props.handleDeleteCompetitionSections}
                                       fields={this.props.competitionSections.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
