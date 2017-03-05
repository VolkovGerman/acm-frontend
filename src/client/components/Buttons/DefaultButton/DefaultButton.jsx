import React from 'react';

require('./DefaultButton.scss');

class DefaultButton extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired
    };

    render = () =>
        <a className="DefaultButton" href="#" onClick={_ => this.props.click(_)}>
            {this.props.name}
        </a>
}

export default DefaultButton;
