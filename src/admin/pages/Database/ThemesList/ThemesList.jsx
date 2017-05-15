import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../../core/config/general.config';

export default class ThemesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: '/dashboard/db/themes/create',
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + '/dashboard/themes/delete'
                }
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список тем новостей');
        !this.props.themes.tableData.length ? this.props.handleLoadingThemesList() : null;
    }

    render() {
        return (
            <div className="Themes">
                <Block title="Список тем новостей" showButtons buttons={this.state.block.buttons}>
                    {!this.props.themes.isLoading && this.props.themes.tableFields.length
                        ? <WidgetTable rows={this.props.themes.tableData} delete={this.props.handleDeleteThemes}
                                       fields={this.props.themes.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
