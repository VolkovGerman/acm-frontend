import React, {Component} from 'react';

require('./WidgetCheckBox.scss');

class WidgetCheckBox extends Component {

    constructor(props) {
        super(props);

        this.checkbox = null;
    }

    static propTypes = {
        active: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        active: false,
        name: 'checkbox'
    };

    state = {
        isActive: this.props.active
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
            <div className="WidgetCheckBox widgetCheckBox">
                <div className="widgetCheckBox__input hidden">
                    <input type="checkbox"
                           name={this.props.name}
                           ref={_ => {
                               this.checkbox = _;
                           }}/>
                </div>
                <div className={this.state.isActive ?
                    'widgetCheckBox__outer widgetCheckBox__outer_active' : 'widgetCheckBox__outer'}
                     onClick={_ => this.toggleActive(_)}>
                    <div className={this.state.isActive ?
                        'widgetCheckBox__inner widgetCheckBox__inner_active' : 'widgetCheckBox__inner'}></div>
                </div>
            </div>
        )
    }
}

export default WidgetCheckBox;
