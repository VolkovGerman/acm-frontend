import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';

require('./News.scss');

class News extends Component {
    componentDidMount() {
        this.props.updateBlockTitle('Список добавленных новостей');
    }

    render() {
        return (
            <div className="News">
                <Block title="Список новостей" showButtons={false}>
                    <WidgetTable/>
                </Block>
            </div>
        )
    }
}

export default News;