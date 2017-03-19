import React from 'react';

require('./TabLayout.scss');

class TabLayout extends React.Component {

    componentWillMount = () => {
        this.props.addTab(this.props.id, this.props.name);
    };

    render = () => {
        if(this.props.isActiveTab(this.props.id)) {
            return (
                <div className="TabLayout">
                    {this.props.children}
                </div>
            );
        }
        return <div></div>
    }
}

export default TabLayout;
