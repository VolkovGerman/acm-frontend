import React from 'react';

import './CheckBox.scss';

export default class CheckBox extends React.Component {

    constructor(props) {
        super(props);

        this.checkbox = null;
    }

    static propTypes = {
        active: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        isActive: false,
        name: ''
    };

    toggleActive(e) {
        this.props.check(this.props.index);
    }

    render() {
        return (
            <div className="WidgetCheckBox widgetCheckBox">
                <div className="widgetCheckBox__input hidden">
                    <input type="checkbox"
                           name={this.props.name}
                           ref={_ => {
                               this.checkbox = _;
                           }}/>
                </div>
                <div className={this.props.isActive ?
                    'widgetCheckBox__outer widgetCheckBox__outer_active' : 'widgetCheckBox__outer'}
                     onClick={_ => this.toggleActive(_)}>
                    <div className={this.props.isActive ?
                        'widgetCheckBox__inner widgetCheckBox__inner_active' : 'widgetCheckBox__inner'}></div>
                </div>
            </div>
        )
    }
}
