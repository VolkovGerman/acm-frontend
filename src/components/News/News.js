import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class News extends Component {
    init() {
        $.get('https://acm-backend.herokuapp.com/news?lang=ru',
            response => {
                this.props.onInit(response);
                this.props.onLoaded();
            }
        )
    }

    componentWillMount() {
        this.init();
    }

    render() {
        return (
            <ul>
                {this.props.news.map((item, index) =>
                    <li key={index}>{item.title}</li>
                )}
            </ul>
        );
    }
}

export default connect(
    state => ({
        news: state.news
    }),
    dispatch => ({
        onInit: _ => dispatch({type: 'INIT_NEWS', payload: _})
    })
)(News);