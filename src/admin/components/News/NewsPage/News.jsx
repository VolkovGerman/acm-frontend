import React, {Component} from 'react';

import Block from '../../Layouts/BlockComponent/Block';
import WidgetTable from '../../Widgets/WidgetTableComponent/WidgetTable';

require('./News.scss');

class News extends Component {
    componentWillMount() {
        this.props.updateBlockTitle('Список добавленных новостей');
    }

    render() {
        let widgets = (
            <WidgetTable />
        );
        return (
            <div className="News">
                <Block block={{title: 'Список новостей', widgets: widgets}} />
            </div>
        )
    }
}

export default News;
