import React, {Component} from 'react';

require('./WidgetSwitch.scss');

class WidgetSwitch extends Component {

    constructor(props) {
        super(props);

        this.checkbox = null;
        this.state = {
            isActive: props.active
        };
    }

    static propTypes = {
        active: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        active: false
    };

    toggleActive(e) {
        e.preventDefault();

        this.setState(_ => ({
            isActive: !_.isActive
        }));

        this.setChecked();
    }

    setChecked() {
        this.checkbox.checked = this.state.isActive;
        this.checkbox.click();
    }

    componentDidMount() {
        this.checkbox.checked = this.state.isActive;
    }

    render() {
        return (
            <div className="WidgetSwitch widgetSwitch">
                <div className="widgetSwitch__input hidden">
                    <input type="checkbox"
                           name={this.props.name}
                           ref={_ => this.checkbox = _}/>
                </div>
                <div className={this.state.isActive ?
                    'widgetSwitch__outer widgetSwitch__outer_active' : 'widgetSwitch__outer'}
                     onClick={_ => this.toggleActive(_)}>
                    <div className={this.state.isActive ?
                        'widgetSwitch__inner widgetSwitch__inner_active' : 'widgetSwitch__inner'}></div>
                </div>
            </div>
        )
    }
}

export default WidgetSwitch;
