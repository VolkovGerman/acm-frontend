import React from 'react';

import './WidgetRow.scss';

export default class WidgetRow extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        isRequired: React.PropTypes.bool
    };

    static defaultProps = {
        title: '',
        isRequired: false
    };

    render() {
        return (
            <div className="WidgetRow">
                <div className="widgetRow clearfix">
                    <label className="widgetRow__label" htmlFor={this.props.name}>
                        <div className="widgetRow__title">
                            {this.props.title}:
                            {this.props.isRequired === true &&
                                <span className="widgetRow__required">*</span>
                            }
                        </div>
                    </label>
                    <div className="widgetRow__input">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
