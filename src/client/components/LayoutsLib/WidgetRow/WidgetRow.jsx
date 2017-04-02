import React from 'react';

require('./WidgetRow.scss');

class WidgetRow extends React.Component {
    static propTypes = {
        label: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        required: React.PropTypes.bool
    };

    static defaultProps = {
        label: '',
        required: false
    };

    render = () => (
        <div className="WidgetRow">
            <div className="widgetRow">
                <label className="widgetRow__label" htmlFor={this.props.name}>
                    {this.props.label}:
                    {this.props.required ? <span className="required">*</span> : ''}
                </label>
                <div className="widgetRow__widget">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
}

export default WidgetRow;
