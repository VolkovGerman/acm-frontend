import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import $ from 'jquery';

class News extends Component {
    init() {
        $.get('https://acm-backend.herokuapp.com/news?lang=ru',
            response => {
                this.props.onInit(response);
                if (typeof(this.props.onLoaded) !== "undefined") {
                    this.props.onLoaded()
                }
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
                    <li key={index}>
                        <Link to={`/news/${item.id}`}>{item.title}</Link>
                    </li>
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