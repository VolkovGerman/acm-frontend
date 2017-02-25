import React, {Component} from 'react';

require('./News.scss');

class News extends Component {
    componentWillMount() {
        this.props.updateBlockTitle('Список добавленных новостей');
    }

    render() {
        return (
            <div>
                News
            </div>
        )
    }
}

export default News;
