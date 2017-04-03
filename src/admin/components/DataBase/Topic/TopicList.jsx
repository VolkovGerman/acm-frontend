import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../core/config/general.config';

class TopicList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {
                fields: [],
                data: []
            },
            buttons: [
                {
                    action: 'db/topics/create',
                    name: 'Добавить',
                    type: 'link',
                    style: 'green'
                }
            ],
            actions: {
                delete: config.server + '/topics/delete'
            }
        }
    }

    componentDidMount() {
        this.props.updateBlockTitle('Список тем новостей');

        fetch(`${config.server}/topics`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(data => {
                this.setState(_ => ({
                    table: {
                        fields: [
                            'Название rus',
                            'Название eng',
                            'Добавление'
                        ],
                        data: data['_embedded']['topics'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return {
                                    id: _.id,
                                    actions: [
                                        {
                                            name: 'Изменить',
                                            link: `/db/topics/update?id=${_.id}`
                                        }
                                    ],
                                    cells: [
                                        _.nameRU,
                                        _.nameEN,
                                        createdAt
                                    ]
                                }
                            }
                        )
                    },
                    buttons: _.buttons
                }));
                this.props.updateLoadedStatus(true, 1);
            });
    }

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="News">
                    <Block title="Список тем новостей" showButtons buttons={this.state.buttons}>
                        <WidgetTable table={this.state.table} actions={this.state.actions} />
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default TopicList;
