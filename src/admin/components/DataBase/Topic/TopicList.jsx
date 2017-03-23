import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../core/config/general.config';

class TopicList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
            buttons: [
                {
                    link: '/topics/create',
                    name: 'Добавить',
                }
            ]
        }
    }

    handleDelete(e) {
        let topics_id = 3;
        fetch(`${config.server}/topics/${topics_id}`, {
            method: 'delete',
        })
            .then(_ => _.json())
            .then(data => {
                console.log(data);
            });

        // e.preventDefault();
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
                                return [
                                    _.nameRU,
                                    _.nameEN,
                                    createdAt
                                ];
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
                    <Block title="Список тем новостей" showButtons externalLinks={this.state.buttons}>
                        <WidgetTable table={this.state.table} handleDelete={this.handleDelete}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default TopicList;
