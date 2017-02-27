import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

require('./Credits.scss');

class Credits extends Component {
    render() {
        return (
            <div className="Credits">
                <div className="credits">
                    <span>{this.props.lang.acm} &#169; </span>
                    <Link className="credits__link" to="/">{this.props.lang.bsuir} 2017</Link>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Credits);
