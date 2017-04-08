import React from 'react';

export default class Index extends React.Component {

    render() {
        console.log(this.props.news);
        return (
            <div>
                <button onClick={this.props.handleLoadingNews}>Hello World!</button>
                {this.props.news.data.map((newsItem, index) =>
                    <div key={index}>{newsItem.titleRU}</div>
                )}
            </div>
        );
    }

}