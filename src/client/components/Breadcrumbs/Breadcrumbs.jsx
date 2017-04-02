import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

require('./Breadcrumbs.scss');

class Breadcrumbs extends Component {
    render = () => (
        <div className="Breadcrumbs">
            <div className="breadcrumbsWrap">
                <ul className="breadcrumbs clearfix">
                    <li className="breadcrumbs__item">
                        <Link className="breadcrumbs__link" to='/'>
                            {this.props.lang.home}
                        </Link>
                    </li>
                    {this.props.breadcrumbs.map((item, index) =>
                        <li className="breadcrumbs__item" key={index}>
                            <Link className="breadcrumbs__link" to={item.link}>{item.name[this.props.lang.currentLangIndex]}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default connect(
    state => ({
        lang: state.lang
    })
)(Breadcrumbs);
