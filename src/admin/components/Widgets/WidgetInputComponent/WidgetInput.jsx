import React, {Component} from 'react';

require('./WidgetInput.scss');

class WidgetInput extends Component {
    render() {
        return (
            <div className="WidgetInput">
                <div className="widgetInput clearfix">
                    <label className="widgetInput__label" htmlFor={this.props.params.name}>
                        <div className="widgetInput__title">{this.props.params.title}:</div>
                    </label>
                    <div className="widgetInput__input inputRow">
                        <input className="inputRow__input" type={this.props.params.type} id={this.props.params.name}
                               name={this.props.params.name}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WidgetInput;
