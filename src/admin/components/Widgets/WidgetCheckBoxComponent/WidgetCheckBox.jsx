import React, {Component} from 'react';

import WidgetInput from '../WidgetInputComponent/WidgetInput';

require('./WidgetCheckBox.scss');

class WidgetCheckBox extends Component {
    render() {
        return (
            <div className="WidgetCheckBox">
                <label className="WidgetCheckBox__label">
                    <WidgetInput name={'checkbox'} type={'checkbox'} />
                </label>
            </div>
        )
    }
}

export default WidgetCheckBox;
