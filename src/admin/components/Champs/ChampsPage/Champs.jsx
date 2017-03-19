import React from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';

class Champs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: {
                fields: [
                    'Название команды',
                    'Университет',
                    'Страна',
                    'Дата регистрации',
                ],
                data: [
                    [
                        'Тестовое название',
                        'БГУИР',
                        'Беларусь',
                        '21.05.2017'
                    ],
                    [
                        'Тестовое название',
                        'БГУИР',
                        'Беларусь',
                        '21.05.2017'
                    ],
                    [
                        'Тестовое название',
                        'БГУИР',
                        'Беларусь',
                        '21.05.2017'
                    ],
                    [
                        'Тестовое название',
                        'БГУИР',
                        'Беларусь',
                        '21.05.2017'
                    ]
                ]
            }
        };
    }

    componentDidMount = () => {
        this.props.updateBlockTitle('Список чемпионатов');
        this.props.updateLoadedStatus(true, 1);
    };

    componentWillUnmount = () => {
        this.props.setLoader();
    };

    render = () =>
        <div className="Champs">
            <Block title="Список новостей" showButtons={false}>
                <WidgetTable table={this.state.table}/>
            </Block>
        </div>
}

export default Champs;
