import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';

import config from '../../../../core/config/general.config';

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {}
        };
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список событий');

        fetch(`${config.server}/topics`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    table: {
                        fields: [
                            'Название',
                            'Добавление'
                        ],
                        data: _['_embedded']['topics'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return [
                                    _.name,
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
            return (
                <div className="Champs">
                    <Block title="Список событий" showButtons={false}>
                        <WidgetTable table={this.state.table}/>
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default Events;
