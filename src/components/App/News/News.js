import React, {Component} from 'react';
import {connect} from 'react-redux';

import {requests} from '../../../config/general'
import localizer from '../../../config/localizer'

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {news: {}};
        this.init();
    }

    init() {
        fetch(`${requests.news}/${this.props.ownProps.params.news_id}?lang=${localizer.lang}`)
            .then(_ => _.json())
            .then(_ => this.setState({news: _}));
    }

    render() {
        return (
            <div>
                <h1>{this.state.news.title}</h1>
            </div>
        );
    }
}

export default connect(
    (stage, ownProps) => ({
        ownProps: ownProps
    })
)(News);
