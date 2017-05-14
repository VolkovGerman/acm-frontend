import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class CompetitionsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: '/dashboard/competitions/create',
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + '/dashboard/competitions/delete'
                }
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список чемпионатов');
        !this.props.competitions.tableData.length ? this.props.handleLoadingCompetitions() : null;
    }

    render() {
        return (
            <div className="Competitions">
                <Block title="Список чемпионатов" showButtons buttons={this.state.block.buttons}>
                    {!this.props.competitions.isLoading && this.props.competitions.tableFields.length
                        ? <WidgetTable rows={this.props.competitions.tableData} delete={this.props.handleDeleteCompetitions}
                                       fields={this.props.competitions.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
