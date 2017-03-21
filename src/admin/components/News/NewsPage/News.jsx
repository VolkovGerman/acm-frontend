import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../core/config/general.config';

require('./News.scss');

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {}
        }
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список добавленных новостей');

        fetch(`${config.server}/news`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    table: {
                        fields: [
                            'Название',
                            'Просмотры',
                            'Статус',
                            'Добавление'
                        ],
                        data: _['_embedded']['news'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return [
                                    _.titleRU,
                                    _.views,
                                    _.statusRU,
                                    createdAt
                                ];
                            }
                        )
                    }
                });
                this.props.updateLoadedStatus(true, 1);
            });
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () => {
        if (this.props.isLoader()) {
            console.log('asdasdasd');
            return (
                <div className="News">
                    <Block title="Список новостей" showButtons={false}>
                        <WidgetTable table={this.state.table}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default News;
