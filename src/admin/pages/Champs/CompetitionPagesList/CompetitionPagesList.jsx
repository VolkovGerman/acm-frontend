import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class CompetitionPagesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: `/dashboard/competitions/${props.params.competition_id}/sections/${props.params.section_id}/pages/create`,
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + `/dashboard/competitions/${props.params.competition_id}/sections/${props.params.section_id}/pages/delete`
                }
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список страниц чемпионата');
        !this.props.competitionPages.tableData.length
            ? this.props.handleLoadingCompetitionPages(this.props.params.competition_id, this.props.params.section_id)
            : null;
    }

    render() {
        return (
            <div className="CompetitionPagesList">
                <Block title="Список страниц чемпионата" showButtons buttons={this.state.block.buttons}>
                    {!this.props.competitionPages.isLoading && this.props.competitionPages.tableFields.length
                        ? <WidgetTable rows={this.props.competitionPages.tableData}
                                       delete={this.props.handleDeleteCompetitionPages}
                                       fields={this.props.competitionPages.tableFields}
                                       actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
