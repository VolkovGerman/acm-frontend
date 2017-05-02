import React from 'react';

import Block from '../../components/layouts/Block/Block';
import WidgetTable from '../../components/widgets/Table/Table';
import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../core/config/general.config';

export default class EventList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: '/events/create',
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + '/events/delete'
                }
            }
        };
    }

    componentWillMount() {
        this.props.setPageTitle('Список событий');
        !this.props.events.tableData.length ? this.props.handleLoadingEvents() : null;
    }

    render() {
        return (
            <div className="Champs">
                <Block title="Список событий" showButtons buttons={this.state.block.buttons}>
                    {!this.props.events.isLoading && this.props.events.tableData.length
                        ? <WidgetTable rows={this.props.events.tableData} delete={this.props.handleDeleteEvents}
                                       fields={this.props.events.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }

}
