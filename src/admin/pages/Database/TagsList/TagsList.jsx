import React from 'react';

import Block from '../../../components/layouts/Block/Block';
import WidgetTable from '../../../components/widgets/Table/Table';
import Loader from '../../../../core/components/loaders/CssSquareLoader/CssSquareLoader';

export default class TagList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            block: {
                buttons: [
                    {
                        action: '/db/tags/create',
                        name: 'Добавить',
                        type: 'link',
                        style: 'green'
                    }
                ],
                actions: {}
            }
        }
    }

    componentWillMount() {
        this.props.setPageTitle('Список тегов');
        !this.props.tags.tableData.length ? this.props.handleLoadingTagsList() : null;
    }

    render() {
        return (
            <div className="News">
                <Block title="Список тегов" showButtons buttons={this.state.block.buttons}>
                    {!this.props.tags.isLoading && this.props.tags.tableData.length
                        ? <WidgetTable rows={this.props.tags.tableData} delete={this.props.handleDeleteTags}
                                       fields={this.props.tags.tableFields} actions={this.state.block.actions}/>
                        : <Loader/>
                    }
                </Block>
            </div>
        )
    }
}
