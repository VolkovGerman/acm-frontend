import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {news: {}};
        this.init();
    }

    init() {
        $.get(`https://acm-backend.herokuapp.com/news/${this.props.ownProps.params.news_id}?lang=ru`,
            _ => this.setState({news: _}), 'json'
        )
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
