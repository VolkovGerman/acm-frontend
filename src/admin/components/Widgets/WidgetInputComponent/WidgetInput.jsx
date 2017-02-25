import React, {Component} from 'react';

require('./WidgetInput.scss');

class WidgetInput extends Component {
    render() {
        return (
            <div className="WidgetInput">
                <input className="widgetInput"
                       type={this.props.params.type}
                       id={this.props.params.name}
                       name={this.props.params.name}/>
            </div>
        )
    }
}

export default WidgetInput;
