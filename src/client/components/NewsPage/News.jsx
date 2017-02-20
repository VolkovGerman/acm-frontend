import React, {Component} from 'react';

require('./News.scss');

class News extends Component {
    render() {
        return (
            <div className="News">
                News №{this.props.params.news_id}
            </div>
        );
    }
}

export default News;
