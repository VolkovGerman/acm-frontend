import React from 'react';

import Block from '../../components/layouts/Block/Block';
import WidgetTable from '../../components/widgets/Table/Table';
import Loader from '../../../core/components/loaders/CssSquareLoader/CssSquareLoader';
import config from '../../../core/config/general.config';

export default class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: '/news/create',
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {
                    delete: config.server + '/news/delete'
                }
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список новостей');
        !this.props.news.tableData.length ? this.props.handleLoadingNews() : null;
    }

    render() {
        return (
            <div className="News">
                <Block title="Список новостей" showButtons buttons={this.state.block.buttons}>
                    {!this.props.news.isLoading && this.props.news.tableData.length
                        ? <WidgetTable rows={this.props.news.tableData} fields={this.props.news.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
