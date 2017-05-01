import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import dateformat from 'dateformat';
require('./ArticleHeader.scss');

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        
        );
    }
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Header);
