import React from 'react';

import Block from '../Layouts/BlockComponent/Block';
import WidgetTable from '../Widgets/WidgetTableComponent/WidgetTable';

import config from '../../../core/config/general.config';

const PUBLISH_STATUS = 1;

class EventList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {}
        };
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список событий');

        fetch(`${config.server}/events`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(_ => {
                this.setState({
                    table: {
                        fields: [
                            'Название',
                            'Место проведения',
                            'Публикация',
                            'Добавление',
                        ],
                        data: _['_embedded']['events'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return {
                                    id: _.id,
                                    actions: {
                                        update: '/events/update'
                                    },
                                    cells: [
                                        _.titleRU,
                                        _.placeRU,
                                        this.convertStatusToCountryFlag(_.statusRU, _.statusEN),
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

export default EventList;
