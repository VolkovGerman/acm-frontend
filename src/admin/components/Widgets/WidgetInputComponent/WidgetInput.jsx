import React, {Component} from 'react';

require('./WidgetInput.scss');

class WidgetInput extends Component {

    static propTypes = {
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        type: 'text',
        placeholder: '',
    };

    render() {
        return (
            <div className="WidgetInput">
                <input className="widgetInput"
                       type={this.props.type}
                       id={this.props.name}
                       name={this.props.name}
                       placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

export default WidgetInput;
