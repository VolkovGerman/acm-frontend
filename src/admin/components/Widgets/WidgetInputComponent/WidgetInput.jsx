import React, {Component} from 'react';

require('./WidgetInput.scss');

class WidgetInput extends Component {

    static propTypes = {
        type: React.PropTypes.string,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        return (
            <div className="WidgetInput">
                <input className="widgetInput"
                       type={this.props.type}
                       id={this.props.name}
                       name={this.props.name}/>
            </div>
        )
    }
}

export default WidgetInput;
