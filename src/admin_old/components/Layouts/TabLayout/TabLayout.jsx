import React from 'react';

require('./TabLayout.scss');

class TabLayout extends React.Component {

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

export default TabLayout;
