import React from 'react';

require('./DefaultHeader.scss');

class DefaultHeader extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render = () =>
        <div className="DefaultHeader">
            {this.props.name}
        </div>
}

export default DefaultHeader;
