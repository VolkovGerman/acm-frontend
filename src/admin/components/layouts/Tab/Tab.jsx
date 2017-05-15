import React from 'react';

import './Tab.scss';

export default class Tab extends React.Component {

    componentWillMount = () => {
        this.props.addTab(this.props.id, this.props.name);
    };

    render = () =>
        (
            <div className={this.props.isActiveTab(this.props.id) ? "TabLayout" : 'TabLayout hidden'}>
                {this.props.children}
            </div>
        )
}
