import React from 'react';

import './Input.scss';

export default class Input extends React.Component {

    static propTypes = {
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        type: 'text',
        placeholder: '',
        value: '',
    };

    render() {
        return (
            <div className="WidgetInput">
                <input className="widgetInput"
                       type={this.props.type}
                       id={this.props.name}
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                       defaultValue={this.props.value}
                />
            </div>
        )
    }
}
