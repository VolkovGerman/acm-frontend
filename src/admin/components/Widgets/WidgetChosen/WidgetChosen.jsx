import React from 'react';

import WidgetInput from '../WidgetInputComponent/WidgetInput';
import WidgetTag from '../WidgetTag/WidgetTag';

require('./WidgetChosen.scss');

class WidgetChosen extends React.Component {
    makeTag = (name) => {
        return <WidgetTag name={name}/>
    };

    render = () =>
        <div className="WidgetChosen widgetChosen">
            <WidgetInput name="test"/>
            {this.makeTag('Новый тег')}
        </div>
}

export default WidgetChosen;
