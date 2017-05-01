import React from 'react';

import Block from '../../components/layouts/Block/Block';
import WidgetTable from '../../components/widgets/WidgetTable/WidgetTable';
import config from '../../../core/config/general.config';

const PUBLISH_STATUS = 1;

export default class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
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

    // componentDidMount = () => {
    //     this.props.updateBlockTitle('Список добавленных новостей');
    //
    //     fetch(`${config.server}/news`, {
    //         method: 'get',
    //     })
    //         .then(_ => _.json())
    //         .then(_ => {
    //             this.setState({
    //                 table: {
    //                     fields: [
    //                         'Название',
    //                         'Просмотры',
    //                         'Публикация',
    //                         'Добавление'
    //                     ],
    //                     data: _['_embedded']['news'].map(_ => {
    //                             let createdAt = new Date(_.createdAt);
    //                             createdAt = `${createdAt.toLocaleDateString()}`;
    //                             return {
    //                                 id: _.id,
    //                                 actions: [
    //                                     {
    //                                         name: 'Изменить',
    //                                         link: `/news/update?id=${_.id}`
    //                                     }
    //                                 ],
    //                                 cells: [
    //                                     _.titleRU,
    //                                     _.views,
    //                                     this.convertStatusToCountryFlag(_.statusRU, _.statusEN),
    //                                     createdAt
    //                                 ]
    //                             }
    //                         }
    //                     )
    //                 }
    //             });
    //             this.props.updateLoadedStatus(true, 1);
    //         });
    // };

    convertStatusToCountryFlag = (statusRU, statusEN) => {
        return (
            <div className="flagged">
                {statusRU == PUBLISH_STATUS &&
                <div className="flagged__item ru"></div>
                }
                {statusEN == PUBLISH_STATUS &&
                <div className="flagged__item en"></div>
                }
            </div>
        )
    };

    render() {
        return (
            <div className="News">
                <Block title="Список новостей" showButtons buttons={this.state.buttons}>
                    <WidgetTable table={this.state.table} actions={this.state.actions} />
                </Block>
            </div>
        )
    }
}
