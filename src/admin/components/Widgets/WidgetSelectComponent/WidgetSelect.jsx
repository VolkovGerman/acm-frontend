import React, {Component} from 'react';

require('./WidgetSelect.scss');

class WidgetSelect extends Component {

    static propTypes = {
        options: React.PropTypes.array.isRequired,
        addEmpty: React.PropTypes.bool
    };

    static defaultProps = {
        options: [],
        addEmpty: false
    };

    render() {
        return (
            <div className="WidgetSelect">
                <select className="widgetSelect" name={this.props.name} id={this.props.name}>
                    {this.props.addEmpty === true &&
                    <option value="0"></option>
                    }
                    {this.props.options.map((item, index) =>
                        <option key={index} value={item.value}>{item.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default WidgetSelect;
