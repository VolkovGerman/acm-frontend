import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../core/config/general.config';

const PUBLISH_STATUS = 1;

class SectionList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
            buttons: [
                {
                    action: `/champs/${this.props.params.champId}/sections/create`,
                    name: 'Добавить',
                    type: 'link',
                    style: 'green'
                }
            ],
            actions: {
                delete: config.server + '/champSections/delete'
            }
        };
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список секций чемпионатов');
        this.loadChampSections(this.props.params.champId);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    loadChampSections = (champId) => {
        fetch(`${config.server}/champs/${champId}/sections`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(champs => {
                this.setState({
                    table: {
                        fields: [
                            'Название (рус.)',
                            'Название (анг.)',
                            'Добавление'
                        ],
                        data: champs['_embedded']['champSections'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return {
                                    id: _.id,
                                    actions: [
                                        {
                                            name: 'Изменить',
                                            link: `/champs/${this.props.params.champId}/sections/update?id=${_.id}`
                                        },
                                        {
                                            name: 'Просмотр страниц',
                                            link: `/champs/${_.id}/sections/${_.id}/pages`
                                        }
                                    ],
                                    cells: [
                                        _.titleRU,
                                        _.titleEN,
                                        createdAt
                                    ]
                                }

                            }
                        )
                    }
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="Champs">
                    <Block title="Список секций чемпионатов" showButtons buttons={this.state.buttons}>
                        <WidgetTable table={this.state.table} actions={this.state.actions}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default SectionList;
