import React, {Component} from 'react';

require('./WidgetInput.scss');

class WidgetInput extends Component {
    render() {
        return (
            <div className="WidgetInput">
                <div className="widgetInput">
                    <label className="widgetInput__label clearfix">
                        <div className="widgetInput__title">Название</div>
                        <input className="widgetInput__input" type="text"/>
                    </label>
                </div>
            </div>
        )
    }
}

export default WidgetInput;
