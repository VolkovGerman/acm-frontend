import React, {Component} from 'react';

import WidgetInput from '../../Widgets/WidgetInputComponent/WidgetInput';
import WidgetSwitch from '../../Widgets/WidgetSwitchComponent/WidgetSwitch';

require('./WidgetRow.scss');

class WidgetRow extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        name: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="WidgetRow">
                <div className="widgetRow clearfix">
                    <label className="widgetRow__label" htmlFor={this.props.name}>
                        <div className="widgetRow__title">{this.props.title}:</div>
                    </label>
                    <div className="widgetRow__input">
                        {this.props.widget}
                    </div>
                </div>
            </div>
        )
    }
}

export default WidgetRow;
