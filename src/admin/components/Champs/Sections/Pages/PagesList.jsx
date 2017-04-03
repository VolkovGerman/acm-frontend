import React from 'react';

import Block from '../../../Layouts/BlockComponent/Block';
import WidgetTable from '../../../Widgets/WidgetTableComponent/WidgetTable';
import config from '../../../../../core/config/general.config';

const PUBLISH_STATUS = 1;

class PagesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {},
            buttons: [
                {
                    action: `/champs/${this.props.params.champId}/sections/${this.props.params.sectionId}/pages/create`,
                    name: 'Добавить',
                    type: 'link',
                    style: 'green'
                }
            ],
            actions: {
                delete: config.server + '/pages/delete'
            }
        };
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список страниц чемпионатов');
        this.loadChampSections(this.props.params.sectionId);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    loadChampSections = (sectionId) => {
        fetch(`${config.server}/champSections/${sectionId}/pages`, {
            method: 'get',
        })
            .then(_ => _.json())
            .then(champs => {
                this.setState({
                    table: {
                        fields: [
                            'Название(рус.) ',
                            'Название(анг.) ',
                            'Системное имя',
                            'Добавление'
                        ],
                        data: champs['_embedded']['pages'].map(_ => {
                                let createdAt = new Date(_.createdAt);
                                createdAt = `${createdAt.toLocaleDateString()}`;
                                return {
                                    id: _.id,
                                    actions: [
                                        {
                                            name: 'Изменить',
                                            link: `/champs/${this.props.params.champId}/sections/${this.props.params.sectionId}/pages/update?id=${_.id}`
                                        }
                                    ],
                                    cells: [
                                        _.titleRU,
                                        _.titleEN,
                                        _.systemName,
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

    render = () => {
        if (this.props.isLoader()) {
            return (
                <div className="Champs">
                    <Block title="Список событий" showButtons buttons={this.state.buttons}>
                        <WidgetTable table={this.state.table} actions={this.state.actions} />
                    </Block>
                </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default PagesList;
