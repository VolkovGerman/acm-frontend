import React, {Component} from 'react';

require('./WidgetRow.scss');

class WidgetRow extends Component {
    render() {
        return (
            <div className="WidgetRow">
                <div className="widgetRow clearfix">
                    <label className="widgetRow__label" htmlFor={this.props.params.name}>
                        <div className="widgetRow__title">{this.props.params.title}:</div>
                    </label>
                    <div className="widgetRow__input">
                        {this.props.params.widget}
                    </div>
                </div>
            </div>
        )
    }
}

export default WidgetRow;
